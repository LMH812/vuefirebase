<script>
import auth from 'firebase/auth'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Channel from '../components/Channel.vue'
import Messages from '../components/message/Messages.vue'
export default {
    name: 'Chat',
    components: {
        Sidebar,
        Channel,
        Messages
    },
    setup() {
    }
}
</script>
<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4 sidebar">
                    <Sidebar />
                    <!-- <Channel /> -->
                </div>

                <div class="col-md-8 content">
                    <Messages />
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .sidebar {
        width: 33.5%;
        display: block;
        float: left;
        position: fixed;
        height: 100%;
        background: #000;
        padding-top: 2em;
        overflow: scroll;
    }
    .content {
        width: 66%;
        display: block;
        float: left;
        margin-left: 34%;
    }
</style>