<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed, inject } from '@vue/runtime-core';
export default {
    setup() {
        const store = useStore();
        const message = ref('');
        const error = ref([]);
        const currentChannel = computed(() => {
            return store.getters.currentChannel
        })
        const userInfo = computed(() => {
            return store.getters.userInfo
        })
        const messagesRef = inject('messagesRef')
        console.log(userInfo.value.photoURL);
        const sendMessage = () => {
            // console.log('send');
            let newMessage = {
                content: message.value,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: {
                    name: userInfo.value.displayName,
                    avatar: userInfo.value.photoURL,
                    id: userInfo.value.uid
                }
            }
            if (currentChannel.value != null) {
                console.log(currentChannel.value.id);
                if (message.value.length > 0) {
                    console.log(messagesRef);
                    messagesRef.child(currentChannel.value.id).push().set(newMessage)
                    .then((result) => {
                           
                    }).catch((err) => {
                        error.value.push(err.message)
                    });
                    message.value = '';
                }
            }


        }
        return {
            message,
            error,
            sendMessage
        }
    }
}
</script>

<template>
  <div>
      <div class="messageform">
          <form>
                <div class="input-group mb-3">
                    <input 
                    type="text" 
                    name="message" 
                    id="message" 
                    class="form-control mt-3" 
                    placeholder="Write something"
                    v-model="message" 
                    autofocus>

                    <div class="input-group-append">
                        <button class="btn btn-primary mt-3" type="button" @click="sendMessage">Send</button>
                    </div>

                    <div class="input-group-append">
                        <button class="btn btn-warning mt-3" type="button">Upload</button>
                    </div>
                </div>
          </form>
      </div>
  </div>
</template>

<style lang="scss" scoped>
    .messageform {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 67%;
        z-index: 100;
        color: #fff;
        text-align: center;
        margin-bottom: -16px;
        margin-left: 33.3%;
    }
    input,button {
        height: 50px;
    }
</style>