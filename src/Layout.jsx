import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function Layout() {
  return (
    <div className="bg-[#ede8de]">
      <nav className="h-20 relative">
        <NavBar />
      </nav>

      <Outlet />
    </div>
  );
}
