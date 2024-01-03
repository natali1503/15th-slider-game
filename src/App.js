import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import StartGame from "./pages/StartGame/StartGame";
import Field from "./pages/Field/Field";
import Victory from "./pages/Victory/Victory";

const router = createBrowserRouter([
  {
    path: "/15th-slider-game",
    element: <StartGame />,
  },
  {
    path: "/15th-slider-game/playingField",
    element: <Field />,
  },
  {
    path: "/15th-slider-game/victory",
    element: <Victory />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
