import { Toaster } from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
