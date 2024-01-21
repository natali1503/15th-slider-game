import {
  RouterProvider,
  // createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import "./App.css";
import StartGame from "./pages/StartGame/StartGame";
import Field from "./pages/Field/Field";
import Victory from "./pages/Victory/Victory";
import Error from "./ui/Error/Error";

const router = createHashRouter([
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
  { path: "*", element: <Error /> },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
