import { getIndexNull } from "./getIndexNull";

export function isMoved(direction, arr) {
  const size = arr.length;
  const s = Math.sqrt(size);
  // ArrowUp
  // ArrowLeft
  // ArrowDown
  // ArrowRight

  const index = getIndexNull(arr);
  if ("ArrowUp" === direction) {
    return index >= s ? true : false;
  } else if ("ArrowLeft" === direction) {
    return index % s !== 0 ? true : false;
  } else if ("ArrowDown" === direction) {
    return index < size - s ? true : false;
  } else if ("ArrowRight" === direction) {
    return (index + 1) % s !== 0 ? true : false;
  } else return;
}
