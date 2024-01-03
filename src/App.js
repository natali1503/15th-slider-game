import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import StartGame from "./pages/StartGame/StartGame";
import Field from "./pages/Field/Field";
import Victory from "./pages/Victory/Victory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartGame />,
  },
  {
    path: "/playingField",
    element: <Field />,
  },
  {
    path: "/victory",
    element: <Victory />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
