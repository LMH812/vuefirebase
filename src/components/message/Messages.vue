<script>
import { useStore } from 'vuex';
import { computed, onUnmounted, provide, ref, watch, nextTick } from '@vue/runtime-core';
import SingleMessage from './SingleMessage.vue';
import MessageForm from './MessageForm.vue';
import database from 'firebase/database'
export default {
    components: {
        SingleMessage,
        MessageForm
    },
    setup() {
        const store = useStore();
        const messagesRef = firebase.database().ref('messages')
        const privateMessagesRef = firebase.database().ref('privateMessages')
        const messages = ref([]);
        const channel = ref('');
        const currentChannel = computed(() => {
            return store.getters.currentChannel
        })
        const currentUser = computed(() => {
            return store.getters.userInfoe
        })
        const isPrivate = computed(() => {
            return store.getters.isPrivate
        })
        watch(currentChannel,(val,oldVal) => {
            messages.value = []
            addListeners();
            channel.value = currentChannel.value
        })
        const addListeners = () => {
            let ref = getMessagesRef()
            console.log(currentChannel.value.id);
            ref.child(currentChannel.value.id).on('child_added', (snapshot) => {
                let message = snapshot.val()
                message['id'] = snapshot.key
                messages.value.push(message)

                nextTick(() => {
                    $('html, body').scrollTop($(document).height())
                })
            })
        }
        const getMessagesRef = () => {
            if (isPrivate.value) {
                console.log(1);
                return privateMessagesRef
            } else {
                console.log(2);
                return messagesRef
            }
        }
        const detachListeners = () => {
            if (channel.value != null) {
                messagesRef.child(channel.id).off()
            }
        }
        onUnmounted(()=> {
            detachListeners()
        })
        console.log(currentChannel.value);

        provide('messagesRef', getMessagesRef())
        return {
            messagesRef,
            addListeners,
            channel,
            messages,
        }
    }
}
</script>

<template>
  <div>
      <SingleMessage :messages="messages"/>
      <MessageForm />
  </div>
</template>

<style>

</style>