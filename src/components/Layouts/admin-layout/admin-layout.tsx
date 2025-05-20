import styles from "./style.module.css";
import { Outlet, useLocation, useNavigate } from "react-router";
import Footer from "@components/footer/footer";
import AdminHeader from "@components/header/admin-header/admin-header";

function AdminLayout() {
  const location = useLocation();
  console.log(location);

  return (
    <main className={styles.layout}>
      <AdminHeader
      />
      <Outlet />
    </main>
  );
}

export default AdminLayout;
