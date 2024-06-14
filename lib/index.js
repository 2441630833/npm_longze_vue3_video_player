/*
 * @Author: longze
 * @Date: 2024-06-14 15:50:42
 * @LastEditors: longze
 * @LastEditTime: 2024-06-14 15:50:42
 * @Description: file content
*/
import videoPlay from './video-play/main.vue';

function install(app) {
  app.component(videoPlay.name, videoPlay)
}
videoPlay.install = install
export {
  videoPlay,
  install
}
export default videoPlay;