<template>
  <div id="home">
    <h1>videos</h1>
    <div class="video-container">  
      <div v-for="video in videos" :key="video.name" class="video-box">
        <img :src="video.thumbnail" />
        <div>
          <h3>{{video.name}}</h3>
          <p>{{video.description}}</p>
        </div>
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
      videos: [
        {
          name: 'video 1',
          description: 'potato potato potato video 1',
          thumbnail: 'https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg',
        },
        {
          name: 'video 2',
          description: 'potato potato potato video 2',
          thumbnail: 'https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg',
        },
        {
          name: 'video 3',
          description: 'potato potato potato video 3',
          thumbnail: 'https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg',
        },
        {
          name: 'video 4',
          description: 'potato potato potato video 4',
          thumbnail: 'https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg',
        },
      ]
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