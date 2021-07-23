<script>
import auth from 'firebase/auth'
import database from 'firebase/database'
import { useStore, mapGetters } from 'vuex';
import { useRouter } from 'vue-router'
import { computed } from '@vue/runtime-core';
import Channel from './Channel.vue'
import User from './User.vue'
export default {
    components: {
        Channel,
        User
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const presenceRef = firebase.database().ref('presence')
        const userInfo = computed(() => {
            return store.getters.userInfo
        })
        const logOut = () => {
            presenceRef.child(userInfo.value.uid).remove()
            firebase.auth().signOut()
            store.dispatch('setUser', null)
            router.push('/')
        }
        return {
            logOut,
            userInfo
        }
    }
}
</script>
<template>
    <div>
        <h2 class="text-light">#SLACK#</h2>
        <hr style="border: 1px solid #333">

        <div>
            <img class="rounded-circle me-2" height="30" :src="userInfo.photoURL" alt="">
            <span class="text-light">{{ userInfo.displayName }}</span>
        </div>
        <hr style="border: 1px solid #333">
        <button class="btn btn-outline-light" @click="logOut">LogOut</button>

        <hr style="border: 1px solid #333">
        <Channel />
        <hr style="border: 1px solid #333">
        <User />

    </div>
</template>
<style lang="scss" scoped>

</style>