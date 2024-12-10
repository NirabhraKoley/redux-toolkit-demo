import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Products } from "./components/Products";
import { Dashboard } from "./components/Dashboard";
import { Cart } from "./components/Cart";
import { RootLayout } from "./components/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index path="/dashboard" element={<Dashboard />}></Route>
        <Route index path="/products" element={<Products />}></Route>
        <Route index path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
