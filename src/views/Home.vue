
<script>
import auth from 'firebase/auth';
import database from 'firebase/database'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import { reactive, ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  name: 'Home',
  setup() {
    const store = useStore();
    const router = useRouter();
    let provider = '';
    const usersRef = firebase.database().ref('users')
    const errorsMsd = ref('')
    const loading  = ref(false)
    const hasError = computed(()=> {
      return errorsMsd.length > 0
    })
    const saveUserToUsersRef = (user) => {
      console.log(user);
      return usersRef.child(user.uid).set({
        name: user.displayName,
        avatar: user.photoURL
      })
    }
    // const loginWithGoogle = () => {
    //   loading.value = true;
    //   firebase.auth().signInWithPopup(provider)
    //   .then((result) => {
    //     console.log(result.user);
    //     store.dispatch('setUser',result.user)
    //     router.push('/chat')
    //   })
    //   .catch((err) => {
    //     errorsMsd.value = err.message;
    //     loading.value = false
    //   })
    // }
    const sicialLogin = (socialType) => {
      if (socialType == 'facebook') {
        provider = new firebase.auth.FacebookAuthProvider();
      } else if (socialType == 'google') {
        provider = new firebase.auth.GoogleAuthProvider();
      }
      console.log(provider.value);
      loading.value = true;
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        saveUserToUsersRef(result.user)
        store.dispatch('setUser',result.user)
        router.push('/chat')
      })
      .catch((err) => {
        console.log(err);
        errorsMsd.value = err.message;
        loading.value = false
      })
    }

    return {
      // loginWithGoogle,
      sicialLogin,
      errorsMsd,
      loading,
      hasError
    }
  }
}
</script>

<template>
  <div>
    <div class="jumbotron bg-primary text-white text-center">
      <h2 class="lead display-3">#SLACK#</h2>
      <p>Realtime communication</p>
    </div>
    <div class="alert alert-info" v-if="loading">Processing...</div>
    <div class="alert alert-danger" v-if="errorsMsd != '' ">
      <div> {{ errorsMsd }} </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-danger btn-lg" @click="sicialLogin('google')">
            Login with google
          </button>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn btn-outline-info btn-lg" @click="sicialLogin('facebook')">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

