import {
  Routes,
  Route,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";

import ProtectedRoute from "./components/ProtectedRoute";

import AdminDashboard from "./pages/AdminDashboard";

import ResellersPage from "./pages/ResellersPage";

import CustomersPage from "./pages/CustomersPage";

import OrdersPage from "./pages/OrdersPage";

import TopupsPage from "./pages/TopupsPage";

import ComplaintsPage from "./pages/ComplaintsPage";

import AnnouncementsPage from "./pages/AnnouncementsPage";

import PackagesPage from "./pages/PackagesPage";

import RankingsPage from "./pages/RankingsPage";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/resellers"
        element={
          <ProtectedRoute>
            <ResellersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/customers"
        element={
          <ProtectedRoute>
            <CustomersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/topups"
        element={
          <ProtectedRoute>
            <TopupsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/complaints"
        element={
          <ProtectedRoute>
            <ComplaintsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/announcements"
        element={
          <ProtectedRoute>
            <AnnouncementsPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/packages"
        element={
          <ProtectedRoute>
            <PackagesPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/admin/rankings"
        element={
          <ProtectedRoute>
            <RankingsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
