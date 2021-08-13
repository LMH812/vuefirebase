<script>
import { useStore, mapGetters } from 'vuex';
import { reactive, ref, computed } from 'vue'
import database from 'firebase/database'
import {  onBeforeUnmount, onMounted } from '@vue/runtime-core';
export default {
    setup() {
        const store = useStore();
        const new_channel = ref('');
        const errmsg = ref('');
        const channel = ref(null);
        const channels = reactive({arr:[]})
        const channelRef = firebase.database().ref('channels')
        const openModal = () => {
            $('#channelModal').appendTo('body').modal('show')
        }
        const addChannel = () => {
            errmsg.value = '';
            let key = channelRef.push().key
            console.log('new creating channel key:', key);
            let newChannel = {
                id : key,
                name: new_channel.value
            }
            channelRef.child(key).update(newChannel)
            .then((res) => {
                new_channel.value = '';
                $('#channelModal').modal('hide')
                // console.log(res);
            })
            .catch((err) => {
                console.log(err.message);
                errmsg.value = err.message
            })
        }
        const hasErrors = computed(() => {
            return errmsg
        })
        const addListeners = () => {
            channelRef.on('child_added', snapshot => {

                channels.arr.push(snapshot.val())

                if (channels.arr.length > 0) {
                    channel.value = channels.arr[0];
                    store.dispatch('setCurrentChannel', channel.value)
                }
            })
        }
        const currentChannel = computed(() => {
            return store.getters['currentChannel']
        })
        const detachListeners = () => {
            channelRef.off()
        }
        const setActiveChannel = (channel) => {
            return channel.id == currentChannel.value.id
        }
        const changeChannel = (channel) => {
            store.dispatch('setPrivate', false)
            store.dispatch('setCurrentChannel', channel)
        }
        onMounted(() => {
            addListeners()
        })
        onBeforeUnmount(() => {
            detachListeners()
        })
        return {
            openModal,
            new_channel,
            addChannel,
            errmsg,
            hasErrors,
            channels,
            setActiveChannel,
            changeChannel
        }
    }
}
</script>
<template>
  <div>
      <button class="btn btn-outline-primary" @click="openModal">Add Channel</button>
        <div class="mt-4">
            <button 
            class="list-group-item list-group-item-action" 
            type="button" 
            v-for="(items,idx) in channels.arr" 
            :key="idx" 
            :class="{'active': setActiveChannel(items)}" 
            @click="changeChannel(items)">{{ items.name }}</button>
        </div>
        <div class="modal fade" id="channelModal">
            <div class="modal-dialog modal-dialog-center">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input type="text" v-model="new_channel" id="new_channel" name="new-channel" placeholder="Channel Name" class="form-control">
                            </div>
                            <div class="list-group" v-if="hasErrors">
                                <p class="text-danger">{{ errmsg }}</p>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
                        <button type="button" class="btn btn-primary" @click="addChannel">Add Channel</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<style>

</style>