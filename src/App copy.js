import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartGame from "./pages/StartGame";
import Field from "./pages/Field";

// const ImageSplitter = ({ imagePath }) => {
//   const [canvasArray, setCanvasArray] = useState([]);

//   const sourceImage = new Image();
//   sourceImage.src = imagePath;
//   sourceImage.onload = () => {
//     console.log(123);
//   };
//   // sourceImage.onload = () => {
//   //   const newCanvasArray = [];
//   //   // Создаем 16 канвасов и разбиваем изображение
//   //   for (let i = 0; i < 4; i++) {
//   //     for (let j = 0; j < 4; j++) {
//   //       const canvas = document.createElement("canvas");
//   //       canvas.width = sourceImage.width / 4;
//   //       canvas.height = sourceImage.height / 4;
//   //       const ctx = canvas.getContext("2d");

//   //       // Рисуем часть изображения на каждом канвасе
//   //       ctx.drawImage(
//   //         sourceImage,
//   //         (j * sourceImage.width) / 4,
//   //         (i * sourceImage.height) / 4,
//   //         sourceImage.width / 4,
//   //         sourceImage.height / 4,
//   //         0,
//   //         0,
//   //         canvas.width,
//   //         canvas.height
//   //       );
//   //       // setCanvasArray((arr) => [...arr, canvas]);
//   //       newCanvasArray.push(canvas);
//   //     }
//   //   }

//   //   setCanvasArray(newCanvasArray);
//   // };
//   console.log(1);

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap" }}>
//       {canvasArray.map((canvas, index) => (
//         <div key={index} style={{ margin: "5px" }}>
//           <img
//             alt={`Part ${index}`}
//             src={canvas.toDataURL("image/png")}
//             style={{
//               width: "150px",
//               height: "auto",
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartGame />,
  },
  {
    path: "/playingField",
    element: <Field />,
  },
]);

const ImageSplitter = ({ imagePath }) => {
  const [canvasArray, setCanvasArray] = useState([]);

  useEffect(() => {
    const sourceImage = new Image();
    sourceImage.src = imagePath;

    sourceImage.onload = () => {
      const newCanvasArray = [];

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
          // console.log(canvas.toDataURL("image/png"));
          newCanvasArray.push(canvas);
        }
      }

      setCanvasArray(newCanvasArray);
    };
  }, [imagePath]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {canvasArray.map((canvas, index) => {
        // console.log(canvas.toDataURL);
        return (
          <div key={index} style={{ margin: "5px" }}>
            <img
              alt={`Part ${index}`}
              src={canvas.toDataURL("image/png")}
              style={{ width: "150px", height: "auto" }}
            />
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return <RouterProvider router={router} />;
  const imagePath = "alessio-soggetti-vYt359Xz8c4.jpg";

  // return (
  //   <div>
  //     <h1>Image Splitter</h1>
  //     <ImageSplitter imagePath={imagePath} />
  //   </div>
  // );
};

export default App;
