import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [
      {
        id: 0,
        name: 'video-1',
        description: 'potato potato potato video 1',
        thumbnail: 'https://www.wweek.com/resizer/86tt-U3ytIrtb7bBYXAIg7XWz7A=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2019/08/30145212/Nicolas-Cage.jpg',
      },
      {
        id: 1,
        name: 'video-2',
        description: 'potato potato potato video 2',
        thumbnail: 'https://hardtickettohomevideo.files.wordpress.com/2013/07/cage-face-2.jpg',
      },
      {
        id: 2,
        name: 'video-3',
        description: 'potato potato potato video 3',
        thumbnail: 'https://www.tvovermind.com/wp-content/uploads/2018/05/Cage.jpg',
      },
      {
        id: 3,
        name: 'video-4',
        description: 'potato potato potato video 4',
        thumbnail: 'https://img2.looper.com/img/gallery/craziest-nicolas-cage-performances/vampires-kiss-1988.jpg',
      },
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
