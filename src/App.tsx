import { JSX } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dahsboard";
import { AuthProvider } from "./context/authContext";
import Authenticated from "./security/authenticated";

function App(): JSX.Element {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={
            <Authenticated>
              <Dashboard />
            </Authenticated>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
