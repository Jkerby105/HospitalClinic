import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { ErrorPage } from "./pages/error/errorPage";



function App() {
  const router = createBrowserRouter([
  
    {
      errorElement: <ErrorPage />,
      


    }
  
  ]);

  return (
    <>
      <p>Hello World</p>
    </>
  );
}

export default App;
