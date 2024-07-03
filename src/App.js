import "./App.css";
import {
  LoginPage,
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
import EditApartment from "./pages/EditApartment";
import CreateApartment from "./pages/CreateApartment";
import FinancialManagement from "./pages/FinancialManagement";
import StatsPage from "./pages/StatsPage";

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
        <Route path="/apartments">
          <Route index element={<ApartmentsPage />} />
          <Route path="edit" element={<EditApartment />} />
          <Route path="create" element={<CreateApartment />} />
        </Route>
        <Route path="/financialmanagement" element={<FinancialManagement />} />
        <Route path="/stats" element={<StatsPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
