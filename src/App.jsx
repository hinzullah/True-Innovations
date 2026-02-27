import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Explore from "./Pages/Explore.jsx";
import Orders from "./Pages/Orders.jsx";
import Landpage from "./Pages/Landpage.jsx";
import FoodDetails from "./Components/FoodDetails.jsx";
import Account from "./Pages/Account.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="landpage" element={<Landpage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="food/:id" element={<FoodDetails />} />
          <Route path="orders" element={<Orders />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
