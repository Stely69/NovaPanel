import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const Inicio = lazy(() => import("./pages/Inicio.tsx"));
const Layout = lazy(() => import("./components/layout/layout.tsx"));
const Login = lazy(() => import("./pages/Login.tsx"));
const Dashboard = lazy(() => import("./pages/Dashboard.tsx"));
const LayoutAdmin = lazy(() => import("./components/layout/LayoutAdmin.tsx"));



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<LayoutAdmin />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
