<script>
import auth from 'firebase/auth'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'
import Sidebar from '../components/Sidebar.vue'
import Channel from '../components/Channel.vue'
export default {
    name: 'Chat',
    components: {
        Sidebar,
        Channel
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
                    <Channel />
                </div>

                <div class="col-md-8 content">
                    content
                </div>
            </div>
        </div>
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
                            <input type="text" id="new_channel" name="new-channel" placeholder="Channel Name" class="form-control">
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">cancel</button>
                    <button type="button" class="btn btn-primary">Add Channel</button>
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