<script>
import { useStore } from 'vuex'
import database from 'firebase/database'
import { ref } from '@vue/reactivity'
import { computed, onMounted, onUnmounted } from '@vue/runtime-core'
export default {
    setup() {
        const store = useStore()
        const users = ref([]);
        const usersRef = firebase.database().ref('users');
        const connectedRef = firebase.database().ref('.info/connected');
        const presenceRef = firebase.database().ref('presence')
        const currentUser = computed(() => {
            return store.getters.userInfo
        })
        const currentChannel = computed(() => {
            return store.getters.currentChannel
        })
        const addListener = () => {
            usersRef.on('child_added',(snapshot) => {
                console.log(currentUser.value.uid , snapshot.key);
                if (currentUser.value.uid != snapshot.key) {
                    let user = snapshot.val();
                    user['uid'] = snapshot.key;
                    user['status'] = 'offline';
                    users.value.push(user) 
                }
            })

            presenceRef.on('child_added', snapshot => {
                console.log('child_added');
                // console.log(currentUser.value.uid != snapshot.key);
                if (currentUser.value.uid != snapshot.key) {
                    addStatusToUser(snapshot.key)
                }
            })

            presenceRef.on('child_removed', snapshot => {
                console.log('child_removed');
                if (currentUser.value.uid != snapshot.key) {
                    addStatusToUser(snapshot.key, false)
                }
            })
            connectedRef.on('value', (snapshot) => {
                // console.log('connected user:', snapshot);
                if (snapshot.val()) {
                    let ref = presenceRef.child(currentUser.value.uid);
                    ref.set(true)
                    ref.onDisconnect().remove()
                }
            })
        }
        const addStatusToUser = (userId, connected = true) => {
            console.log(userId);
            let index = users.value.findIndex(user => user.uid == userId)
                console.log(index);
            if (index != -1) {
                connected ? users.value[index].status = 'online': users.value[index].status = 'offline'
            }
        }
        const isOnline = (user) => {
            return user.status == 'online'
        }
        const changeChannel = (user) => {
            // console.log(user.uid);
            let channelId = getChannelId(user.uid);
            let channel = {
                id: channelId,
                name: user.name
            }
            // console.log(channel);
            store.dispatch('serPrivate', true)
            store.dispatch('setCurrentChannel', channel)
        }
        const getChannelId = (userId) => {
            return userId < currentUser.value.uid ? userId + '/' + currentUser.value.uid : currentUser.value.uid + '/' + userId
        }
        const detachListeners = () => {
            usersRef.off();
            connectedRef.off();
            presenceRef.off()
        }
        const isActive = (user) => {
            let channelId = getChannelId(user.uid)
            return currentChannel.value.id == channelId
        }
        onMounted(() => {
            addListener()
        })
        onUnmounted(() => {
            detachListeners()
        })
        return {
            users,
            isOnline,
            changeChannel,
            isActive
        }
    }
}
</script>
<template>
    <div>
        <div class="text-light">
            <h4>Users</h4>
            <div class="mt-4">
                <button 
                class="list-group-item list-group-item-action" 
                type="button" 
                v-for="(items,idx) in users" 
                :key="idx" 
                :class="{'active': isActive(items)}" 
                @click.prevent="changeChannel(items)">
                    <span class="me-1" :class="{'fas fa-circle online' : isOnline(items),'fas fa-circle offline' : !isOnline(items)}"></span>
                    <span>
                        <img :src="items.avatar" height="20" alt="" class="rounded-circle">
                        <span><a href="#" :class="{'text-light' : isActive(items)}">{{ items.name }}</a></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .online {
        color: green;
    }
    .offline {
        color: red;
    }
</style>