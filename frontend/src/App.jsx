import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { errorPage } from "./pages/error/errorPage";



function App() {
  const router = createBrowserRouter([
  
    {
      errorElement: <errorPage />,
      


    }
  
  ]);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default App;
