import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Shop from './components/Shop';
import Home from './components/Home.jsx';
import Cart from './components/Cart.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

//App component is parent here when path is / app will be our page
const router = createBrowserRouter([
  {

    //childrens are Home Shop and Cart
    path: '/',
    element: <App />,
    children: [
      {
        // /is initial page as home
        path: '/',
        element: <Home />
      },
      {
        // /shop will lead to shop replacing home component
        path: 'shop',
        element: <Shop />
      },
      {
        // /cart will lead to cart component replacing previous component
        path: 'cart',
        element: <Cart />
      },

    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* {All the components in router can consume the context from CartProvider} */}
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>

  </React.StrictMode>,
)
