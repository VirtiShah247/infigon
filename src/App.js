import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin";
import Getproduct from "./pages/getProduct";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<SignIn/>} />
      <Route path='/getproduct' element = {<Getproduct/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
