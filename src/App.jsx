import { Home, Nav, Error, Sidebar, Contact } from "./Export/Export";
import { Routes, Route, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Nav />
      <Sidebar />
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
