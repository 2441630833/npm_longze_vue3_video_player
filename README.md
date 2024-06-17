<span style="color:#cb3837"> **必须使用 vue@3.2.2及以上版本，播放m3u8格式视频必须定义视频类型**</span>

### longze-vue3-video-player

1、修复全局引入无效的bug,增加模块类型声明
2、增加视频类型判断，避免自动停止HLS请求影响到mp4等其他格式视频暂停播放
3、增加暂停自动停止HLS请求功能，点击播放重新拉取HLS请求
4、增加destroyHLS方法，修改README说明
5、修复vue3-video-player package.json bug 适用于 Vue3 的 hls.js 播放器组件 | 并且支持 MP4/WebM/Ogg 格式 配置强大
6、修复README，更换组件名称
7、注释掉类型判断错误打印输出
## 功能一览

1. 支持快捷键操作
2. 支持倍速播放设置
3. 支持镜像画面设置
4. 支持关灯模式设置
5. 支持画中画模式播放
6. 支持全屏/网页全屏播放
7. 支持从固定时间开始播放
8. 支持移动端，移动端会自动调用自带视频播放器
9. 支持 hls 视频流播放，支持直播
10. hls 播放支持清晰度切换

## 近期更新 v1.1.5 🎉

- 修复全局引入无效的bug,增加模块类型声明
- 增加视频类型判断，避免自动停止HLS请求影响到mp4等其他格式视频暂停播放
- 增加暂停自动停止HLS请求功能，点击播放重新拉取HLS请求
- 增加destroyHLS方法，修改README说明
- 修复vue3-video-player package.json bug
- 更换组件名称
- 注释掉类型判断错误打印输出

# 使用指南

## 安装

npm 安装：

```bash
npm i longze-vue3-video-player --save
```

yarn 安装：

```bash
yarn add longze-vue3-video-player --save
```

## 开始使用

#### 全局使用

##### 全局引入

```js
import { createApp } from "vue";
import App from "./App.vue";
let app = createApp(App);

import longzeVideoPlay from "longze-vue3-video-player"; // 引入组件
import "longze-vue3-video-player/dist/style.css"; // 引入css
app.use(longzeVideoPlay);

app.mount("#app");
```

##### 全局引入后组件内使用
例：
```js
        <longzeVideoPlay
          ref="videoRef"
          :src="testOptions.src"
          :type="testOptions.type"
          :controlBtns="controlBtns"
        />
```

#### 组件内引入直接使用
```js
// require style
import "longze-vue3-video-player/dist/style.css";
import { longzeVideoPlay } from "longze-vue3-video-player";
export default {
  components: {
    longzeVideoPlay,
  },
};
```

## 基本示例

提供了丰富了配置功能
:::demo 自定义配置 比如自定义 poster。

```vue
<template>
  <div>
    <longzeVideoPlay
      v-bind="options"
      poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const options = reactive({
  width: "800px", //播放器宽度
  height: "450px", //播放器高度
  color: "#409eff", //主题色
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  muted: false, //静音
  webFullScreen: false,
  speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
  autoPlay: false, //自动播放
  loop: false, //循环播放
  mirror: false, //镜像画面
  ligthOff: false, //关灯模式
  volume: 0.3, //默认音量大小
  control: true, //是否显示控制
  controlBtns: [
    "audioTrack",
    "quality",
    "speedRate",
    "volume",
    "setting",
    "pip",
    "pageFullScreen",
    "fullScreen",
  ], //显示所有按钮,
});
</script>

<style scoped></style>
```

:::

可以通过`props`的`speed`开启或关闭进度条功能, 并且通过 `currentTime`属性控制从 60 秒开始播放

:::demo 通过`speed`关闭进度条拖动功能。 并且通过 `currentTime`属性控制从 60 秒开始播放

```vue
<template>
  <div>
    <longzeVideoPlay
      v-bind="options"
      poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const options = reactive({
  width: "500px", //播放器高度
  height: "260px", //播放器高度
  color: "#409eff", //主题色
  currentTime: 60,
  speed: false, //关闭进度条拖动
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
});
</script>

<style scoped></style>
```

:::

还可以通过`props`的`control`属性 来控制是否显示控制器
:::demo 通过`control` 来控制是否显示控制器

```vue
<template>
  <div>
    <longzeVideoPlay
      v-bind="options"
      poster="https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/ironMan.jpg"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const options = reactive({
  width: "500px", //播放器高度
  height: "260px", //播放器高度
  color: "#409eff", //主题色
  control: false, //是否显示控制器
  title: "", //视频名称
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
});
</script>

<style scoped></style>
```

:::

## 事件示例

:::demo `longze-vue3-video-player` 支持原生`video`所有事件。

```vue
<template>
  <div>
    <longzeVideoPlay
      width="800px"
      title="钢铁侠"
      :src="options.src"
      :poster="options.poster"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="onTimeupdate"
      @canplay="onCanplay"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
const options = reactive({
  src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4", //视频源
  poster: "", //封面
});
const onPlay = (ev) => {
  console.log("播放");
};
const onPause = (ev) => {
  console.log(ev, "暂停");
};

const onTimeupdate = (ev) => {
  console.log(ev, "时间更新");
};
const onCanplay = (ev) => {
  console.log(ev, "可以播放");
};
</script>

<style scoped></style>
```

:::

## Hls m3u8 视频/直播

:::demo `longze-vue3-video-player` 支持 m3u8(hls)播放

```vue
<template>
  <div>
    <longzeVideoPlay
      width="800px"
      title="冰河世纪"
      :src="options.src"
      :type="options.type"
      :autoPlay="false"
    />
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const options = reactive({
  src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
  type: "m3u8", //视频类型
});
</script>

<style scoped></style>
```

:::

## Hls m3u8 视频/直播销毁事件/播放事件/暂停事件

```vue
<template>
  <div>
    <longzeVideoPlay
      ref="videoRef"
      width="800px"
      title="冰河世纪"
      :src="options.src"
      :type="options.type"
      :autoPlay="false"
    />
    <button @click="destroyHLS">销毁HLS流，不再拉取请求</button>
    <button @click="play">播放</button>
    <button @click="pause">暂停</button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from "vue";
const videoRef = ref(null);
const options = reactive({
  src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", //视频源
  type: "m3u8", //视频类型
});
const destroyHLS = () => {
  videoRef.value.destroyHLS();
};
const play = () => {
  videoRef.value.play();
};
const pause = () => {
  videoRef.value.pause();
};
</script>

<style scoped></style>
```

## Props

longze-vue3-video-player 支持 video 原生所有 Attributes [video 原生属性](https://segmentfault.com/a/1190000008053507) 使用方式和 props 属性使用一致

| 名称          |         说明          |  类型   |                                               可选值                                               |                                               默认值                                               |
| ------------- | :-------------------: | :-----: | :------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: |
| width         |      播放器宽度       | string  |                                                 -                                                  |                                               800px                                                |
| height        |      播放器高度       | string  |                                                 -                                                  |                                               450px                                                |
| color         |     播放器主色调      | string  |                                                 -                                                  |                                              #409eff                                               |
| src           |       视频资源        | string  |                                                 -                                                  |                                                 -                                                  |
| title         |       视频名称        | string  |                                                 -                                                  |                                                 -                                                  |
| type          |       视频类型        | string  |                                                 -                                                  |                                             video/mp4|m3u8                                            |
| poster        |       视频封面        | string  |                                                 -                                                  |                                             视频第一帧                                             |
| webFullScreen |       网页全屏        | boolean |                                                 -                                                  |                                               false                                                |
| speed         |   是否支持快进快退    | boolean |                                                 -                                                  |                                                true                                                |
| currentTime   | 跳转到固定播放时间(s) | number  |                                                 -                                                  |                                                 0                                                  |
| playsinline   | ios 点击屏幕是否全屏  | boolean |                                                 -                                                  |                                               false                                                |
| muted         |         静音          | boolean |                                                 -                                                  |                                               false                                                |
| speedRate     |       倍速配置        |  array  |                                                 -                                                  |                            ["2.0", "1.0", "1.5", "1.25", "0.75", "0.5"]                            |
| autoPlay      |       自动播放        | boolean |                                                 -                                                  |                                     false,为 true 时会自动静音                                     |
| loop          |       循环播放        | boolean |                                                 -                                                  |                                               false                                                |
| mirror        |       镜像画面        | boolean |                                                 -                                                  |                                               false                                                |
| ligthOff      |       关灯模式        | boolean |                                                 -                                                  |                                               false                                                |
| volume        |       默认音量        | number  |                                                0-1                                                 |                                                0.3                                                 |
| control       |    是否显示控制器     | boolean |                                                 -                                                  |                                                true                                                |
| controlBtns   |   控制器显示的按钮    |  array  | ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] | ['audioTrack', 'quality', 'speedRate', 'volume', 'setting', 'pip', 'pageFullScreen', 'fullScreen'] |
| preload       |        预加载         | string  |                                           meta/auto/none                                           |                                                auto                                                |

### `props`属性 `controlBtns` 按钮说明

| 名称           |       说明       |
| -------------- | :--------------: |
| audioTrack     |   音轨切换按钮   |
| quality        | 视频质量切换按钮 |
| speedRate      |   速率切换按钮   |
| volume         |       音量       |
| setting        |       设置       |
| pip            |    画中画按钮    |
| pageFullScreen |   网页全屏按钮   |
| fullScreen     |     全屏按钮     |

## Events

longze-vue3-video-player 支持 video 原生所有事件 [video 默认事件](https://segmentfault.com/a/1190000008053507)

| 事件名称   | 说明                                          | 回调  |
| ---------- | --------------------------------------------- | ----- |
| play       | 开始播放时触发                                | event |
| pause      | 暂停时触发                                    | event |
| destroyHLS | 销毁Hls 实例，停止持续拉取直播流 （适用m3u8） | event |

## 快捷键说明

支持快捷键操作
| 键名 | 说明 |
| ---------- | ----------------------------- |
| Space | 暂停/播放 |
| 方向右键 → | 单次快进 10s，长按 5 倍速播放 |
| 方向左键 ← | 快退 10s |
| 方向上键 ↑ | 音量+10% |
| 方向下键 ↓ | 音量-10% |
| Esc | 退出全屏/退出网页全屏 |
| F | 全屏/退出全屏 |

# Author

[longze]
