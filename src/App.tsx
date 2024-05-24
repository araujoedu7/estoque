import { JSX } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/login";

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
