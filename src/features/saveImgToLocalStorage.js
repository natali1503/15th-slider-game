export function saveImgToLocalStorage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64StringUS = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      localStorage.setItem("wallpaperXXX", base64StringUS);
      const myImage = localStorage.getItem("wallpaperXXX");
      resolve("data:image/png;base64," + myImage);
    };
    reader.readAsDataURL(file);
    reader.onerror = (e) => {
      reject(e);
    };
  });
}
