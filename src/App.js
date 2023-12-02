import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StartGame from "./pages/StartGame";
import Field from "./pages/Field";
import "./App.css";
import Victory from "./pages/Victory";
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
