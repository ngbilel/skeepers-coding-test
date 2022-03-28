import Home from "./Home";
import Navbar from "./Navbar";
import UserDetails from "./UserDetails";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditUser from "./EditUser";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<UserDetails />} />
            <Route path="/editUser/:id" element={<EditUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}
