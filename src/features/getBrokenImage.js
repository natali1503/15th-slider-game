// function getBrokenImage(imagePath, size) {
//   const s = Math.sqrt(size);
//   const canvasArray = [];
//   const sourceImage = new Image();
//   sourceImage.crossOrigin = "anonymous";

//   sourceImage.src = imagePath;
//   // sourceImage.onload = (e) => {
//   const newCanvasArray = [];
//   // Создаем 16 канвасов и разбиваем изображение
//   for (let i = 0; i < s; i++) {
//     // console.log(7);
//     for (let j = 0; j < s; j++) {
//       const canvas = document.createElement("canvas");
//       canvas.width = sourceImage.width / s;
//       canvas.height = sourceImage.height / s;
//       const ctx = canvas.getContext("2d");
//       // Рисуем часть изображения на каждом канвасе
//       ctx.drawImage(
//         sourceImage,
//         (j * sourceImage.width) / s,
//         (i * sourceImage.height) / s,
//         sourceImage.width / s,
//         sourceImage.height / s,
//         0,
//         0,
//         canvas.width,
//         canvas.height
//       );
//       // setCanvasArray((arr) => [...arr, canvas]);
//       console.log(canvas);
//       newCanvasArray.push(canvas.toDataURL("image/png"));
//     }
//   }
//   canvasArray.push(newCanvasArray);
//   // };
//   return canvasArray;
// }

function getBrokenImage(imagePath, size) {
  return new Promise((resolve, reject) => {
    const s = Math.sqrt(size);
    const canvasArray = [];
    const sourceImage = new Image();
    sourceImage.crossOrigin = "anonymous";
    sourceImage.src = imagePath;
    // console.log(876);
    sourceImage.onload = () => {
      const newCanvasArray = [];
      // Создаем 16 канвасов и разбиваем изображение
      for (let i = 0; i < s; i++) {
        for (let j = 0; j < s; j++) {
          const canvas = document.createElement("canvas");
          canvas.width = sourceImage.width / s;
          canvas.height = sourceImage.height / s;
          const ctx = canvas.getContext("2d");
          // Рисуем часть изображения на каждом канвасе
          ctx.drawImage(
            sourceImage,
            (j * sourceImage.width) / s,
            (i * sourceImage.height) / s,
            sourceImage.width / s,
            sourceImage.height / s,
            0,
            0,
            canvas.width,
            canvas.height
          );
          // setCanvasArray((arr) => [...arr, canvas]);
          newCanvasArray.push(canvas.toDataURL("image/png"));
        }
      }
      canvasArray.push(newCanvasArray);
      // };
      resolve(canvasArray);
    };
    sourceImage.onerror = (e) => {
      reject(e);
    };
  });
}

export default getBrokenImage;
