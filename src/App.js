import "./App.css";
import Counter from "./Counter";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import PrivateRoute from "./ProtectedRoute/PrivateRoutes";

function App() {
  const userData = localStorage?.getItem("user");
  const parsedData = JSON?.parse(userData);
  console.log(parsedData?._id);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<PrivateRoute id={parsedData?._id} />}>
          <Route path="/dashboard" element={<Home />} />
        </Route>

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
