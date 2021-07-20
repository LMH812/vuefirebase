<script>
export default {

}
</script>

<template>
  <div>
      <div class="messageform">
          <form>
                <div class="input-group mb-3">
                    <input type="text" name="message" id="message" class="form-control mt-3" placeholder="Write something" autofocus>

                    <div class="input-group-append">
                        <button class="btn btn-primary mt-3" type="button">Send</button>
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