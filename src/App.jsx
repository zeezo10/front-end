

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Layout from "./Layout";
import Cart from "./pages/Cart";

const router = createBrowserRouter([

  {element :<Layout/>,
    children :[


      {
        path: "/",
        element: <Home />,
      },
      {
        path :"/products",
        element : <Product/>
      }
      ,
      {
        path :"/cart",
        element : <Cart/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
