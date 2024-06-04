import "./App.css";
import {
  LoginPage,
  FinancialManagementPage,
  DashboardPage,
  ErrorPage,
  BuildingsPage,
  ApartmentsPage,
  PrivateRouteAdmin,
  PrivateRoute,
  RegisterUser,
} from "./pages";
import { Routes, Route } from "react-router";
import EditUser from "./pages/EditUser";
import CreateBuilding from "./pages/CreateBuilding";
import EditBuilding from "./pages/EditBuilding";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<PrivateRouteAdmin />}>
        <Route index element={<DashboardPage />} />
        <Route path="create" element={<RegisterUser />} />
        <Route path="edit" element={<EditUser />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/buildings">
          <Route index element={<BuildingsPage />} />
          <Route path="create" element={<CreateBuilding />} />
          <Route path="edit" element={<EditBuilding />} />
        </Route>
        <Route path="/apartments" element={<ApartmentsPage />} />
        <Route path="/financialManagement" element={<FinancialManagementPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
