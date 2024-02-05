import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/reusable/Navbar.jsx";
import { Footer } from "./components/reusable/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
