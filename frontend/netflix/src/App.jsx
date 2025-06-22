import {BrowserRouter,Route,Routes,} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Index from "./pages/Index";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import Tvshows from "./pages/Tvshows";
import Pagenotfound from "./pages/Pagenotfound";``
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import { useContext } from "react";
import { IsAuthenticate } from "./Context/isAuthenticate";
import Loading from "./components/Loading";

function App() {
  const {authenticate , loading } = useContext(IsAuthenticate)
  console.log(authenticate)
  return loading ? (<Loading/>) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authenticate ? (<Home />):(<Index/>) } />

          <Route path="/login" element={<Login />} />
          <Route path="/signup/reform/:email" element={<SignUp />} />
          <Route path="/logout" element={<Logout/>} />

          <Route path="/home" element={authenticate ? (<Home />) :(<Index/>) } />
          <Route path="/home/:type" element={authenticate ? (<Home />) :(<Index/>) }/>

          <Route path="/search" element={authenticate ? (<Search />) :(<Index/>) } />
          <Route path="/tvshow" element={authenticate ? (<Tvshows />) :(<Index/>) } />
          <Route path="/watch/:id" element={authenticate ? (<Watch />) :(<Index/>) } />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={500} />
    </>
  );
}
export default App;
