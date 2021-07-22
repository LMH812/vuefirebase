<script>
import moment from 'moment'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  props:["messages"],
  setup(props) {
    // console.log(props);
    const store = useStore();
    const currentUser = computed(() => {
      return store.getters.userInfo
    })
    const fromNow = (value) => {
      return moment(value).fromNow()
    }
    const selfMessage = (user) => {
      return user.id == currentUser.value.uid
    }
    return{
      props,
      fromNow,
      selfMessage
    }
  }
}
</script>

<template>
    <div>
      <div class="mt-3">
        <div v-for="items in props.messages" :key="items.timestamp">
            <div class="media">
              <img :src="items.user.avatar" height="50" alt="" class="align-self-start me-3">
              <div class="media-body">
                <h6 class="mt-0">
                  <a href="#">{{ items.user.name }}</a> - {{ fromNow(items.timestamp) }}
                </h6>
                <p :class="{'self_message': selfMessage(items.user)}">{{ items.content }}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
  .media {
    display: flex;
  }
  .self_message {
    border-left: 5px solid red;
    padding: 0 10px;
  }
</style>