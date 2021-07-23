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
        const messages = ref([]);
        const channel = ref('');
        const currentChannel = computed(() => {
            return store.getters.currentChannel
        })
        watch(currentChannel,(val,oldVal) => {
            addListeners();
            channel.value = currentChannel.value
        })
        const addListeners = () => {
            // console.log(1);
            messages.value = []
            messagesRef.child(currentChannel.value.id).on('child_added', (snapshot) => {
                messages.value.push(snapshot.val())

                nextTick(() => {
                    $('html, body').scrollTop($(document).height())
                })
            })
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

        provide('messagesRef', messagesRef)
        return {
            messagesRef,
            addListeners,
            channel,
            messages
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