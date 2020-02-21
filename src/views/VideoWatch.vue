<template>
  <div class="video">
    <img :src="video.thumbnail" class="image"/>
    <h1>{{video.name}}</h1>
    <h3>{{video.description}}</h3>
  </div>
</template>

<script>
export default {
  name: 'video-watch',
  computed: {
    video() {
      const videos = this.$store.state.videos;
      return videos.find(vid => vid.id === this.$route.params.id);
    },
  }
}
</script>

<style lang="sass" scoped>
.image
  width: 50vw
</style>