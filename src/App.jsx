import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from './components/First';
import AllProducts from './components/AllProducts';
import AddPurchaseReturn from './components/AddPurchaseReturn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
    children: [
      {
        index: true,
        element: <AllProducts/>
      },
      {
        path: "/AddPurchaseReturn",
        element: <AddPurchaseReturn/>
      },
      {
        path: "/AllProducts",
        element: <AllProducts/>
      }
    ],
  }
]);

function App() {

  return <RouterProvider router={router}/>;
}

export default App;
