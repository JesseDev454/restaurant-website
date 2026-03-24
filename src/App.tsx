import { Outlet, Route, Routes } from "react-router-dom";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { MainLayout } from "@/components/layout/MainLayout";
import { AboutContactPage } from "@/pages/AboutContactPage";
import { HomePage } from "@/pages/HomePage";
import { MenuPage } from "@/pages/MenuPage";
import { AdminDashboardPage } from "@/pages/admin/AdminDashboardPage";

function App() {
  return (
    <Routes>
      <Route
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutContactPage />} />
      </Route>
      <Route
        path="/admin"
        element={
          <AdminLayout>
            <AdminDashboardPage />
          </AdminLayout>
        }
      />
    </Routes>
  );
}

export default App;
