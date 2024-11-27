import TopNav from "./TopNav";
import AppRoutes from "../../routes";

const Layout = () => {
  return (
    <>
      <TopNav />
      <main className="w-full flex items-center justify-center p-5">
        <AppRoutes />
      </main>
    </>
  );
};

export default Layout;
