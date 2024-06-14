/*
 * @Author: longze
 * @Date: 2024-06-14 15:50:42
 * @LastEditors: longze
 * @LastEditTime: 2024-06-14 15:50:42
 * @Description: file content
*/

const files = require.context('./', true, /\index.js$/)

export default files.keys().filter(v => v != './index.js').reduce((arr, key) => {
  let comp = files(key).default
  return [...arr, comp]
}, [])
