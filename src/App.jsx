import { Toaster } from "react-hot-toast";
import "react-photo-view/dist/react-photo-view.css";
import { RouterProvider, ScrollRestoration } from "react-router-dom";
import "./App.css";
import { routes } from "./Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={routes}>
        <ScrollRestoration />
      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
