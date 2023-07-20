import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

function SharedLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default SharedLayout;
