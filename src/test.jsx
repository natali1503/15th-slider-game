// import Cropper from "cropperjs";
export function test() {
  document.addEventListener("DOMContentLoaded", function () {
    const sourceImage = document.getElementById("sourceImage");

    sourceImage.onload = function () {
      const canvasContainer = document.body; // или другой элемент, где вы хотите разместить канвасы

      // Создаем 16 канвасов и разбиваем изображение
      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          const canvas = document.createElement("canvas");
          canvas.width = sourceImage.width / 4;
          canvas.height = sourceImage.height / 4;
          const ctx = canvas.getContext("2d");

          // Рисуем часть изображения на каждом канвасе
          ctx.drawImage(
            sourceImage,
            j * canvas.width,
            i * canvas.height,
            canvas.width,
            canvas.height,
            0,
            0,
            canvas.width,
            canvas.height
          );

          canvasContainer.appendChild(canvas);
        }
      }
    };
  });
}
