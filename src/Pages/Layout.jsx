import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header.jsx";

// Pages where the Header should NOT appear
const hideHeaderOn = ["/", "/login", "/signup"];

const Layout = () => {
  const location = useLocation();

  const showHeader = !hideHeaderOn.includes(location.pathname);

  return (
    <div className="min-h-screen flex font-inter flex-col">
      {/* Header — hidden on home, login, signup */}
      {showHeader && <Header />}

      {/* PAGE CONTENT — grows to fill available space */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER — always visible on every page */}
      <Footer />
    </div>
  );
};

export default Layout;
