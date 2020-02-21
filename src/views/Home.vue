<template>
  <div id="home">
    <h1>videos</h1>
    <div class="video-container">
      <div
        v-for="video in videos"
        :key="video.id"
      >
        <router-link :to="{ name: 'video-watch', params: { id: video.id } }" class="video-box">
          <img :src="video.thumbnail" />
          <div>
            <h3>{{video.name}}</h3>
            <p>{{video.description}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  data() {
    return {
      videos: this.$store.state.videos
    }
  }
}
</script>

<style scoped lang="sass">
.video-container
  .video-box
    border: 1px solid black
    border-radius: 10px
    margin: 10px
    padding: 10px
    text-align: left
    display: flex
    justify-content: flex-start

    img
      width: 200px
      padding-right: 15px
</style>