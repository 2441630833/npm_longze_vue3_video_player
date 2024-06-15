/*
 * @Author: longze
 * @Date: 2024-06-14 15:50:42
 * @LastEditors: longze
 * @LastEditTime: 2024-06-14 15:50:42
 * @Description: file content
*/
import longzeVideoPlay from './video-play/main.vue';

function install(app) {
  app.component(longzeVideoPlay.name, longzeVideoPlay)
}
longzeVideoPlay.install = install
export {
  longzeVideoPlay,
  install
}
export default longzeVideoPlay;