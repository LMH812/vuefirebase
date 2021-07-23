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
        // console.log(users);
        const detachListeners = () => {
            usersRef.off();
            connectedRef.off();
            presenceRef.off()
        }
        onMounted(() => {
            addListener()
        })
        onUnmounted(() => {
            detachListeners()
        })
        return {
            users,
            isOnline
        }
    }
}
</script>
<template>
    <div>
        <div class="text-light">
            <h4>Users</h4>
            <ul class="nav flex-column">
                <li v-for="items in users" :key="items.uid">
                    <span>
                        <img :src="items.avatar" height="20" alt="" class="rounded-circle">
                        <span :class="{'text-primary' : isOnline(items),'text-danger' : !isOnline(items)}">{{ items.name }}</span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>

</style>