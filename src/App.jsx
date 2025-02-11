

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Layout from "./Layout";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

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
      ,
      {
        path :"/products/:id",
        element : <ProductDetail/>
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
