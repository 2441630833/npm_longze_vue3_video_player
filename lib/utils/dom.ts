/*
 * @Author: longze
 * @Date: 2024-06-14 15:50:42
 * @LastEditors: longze
 * @LastEditTime: 2024-06-14 15:50:42
 * @Description: file content
*/
export const on = function (
    element: Element | HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject,
    useCapture = false,
): void {
    if (element && event && handler) {
        element.addEventListener(event, handler, useCapture)
    }
}
/* istanbul ignore next */
export const off = function (
    element: Element | HTMLElement | Document | Window,
    event: string,
    handler: EventListenerOrEventListenerObject,
    useCapture = false,
): void {
    if (element && event && handler) {
        element.removeEventListener(event, handler, useCapture)
    }
}
