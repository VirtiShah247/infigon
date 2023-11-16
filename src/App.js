import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import Getproduct from "./pages/getProduct";

function App() {
  const token = localStorage.getItem("accessToken");
  console.log("token", token);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/getproduct' element = {<Getproduct/>} />
      <Route path='/' element = {<SignIn/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
