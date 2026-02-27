import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Explore from "./Pages/Explore.jsx";
import Orders from "./Pages/Orders.jsx";
import Landpage from "./Pages/Landpage.jsx";
import FoodDetails from "./Components/FoodDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/landpage", element: <Landpage /> },
      { path: "/explore", element: <Explore /> },
      { path: "/food-details", element: <FoodDetails /> },
      { path: "/orders", element: <Orders /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
