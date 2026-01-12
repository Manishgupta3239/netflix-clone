import React, { useContext } from 'react'
import { IsAuthenticate } from './isAuthenticate'
import { Outlet, useNavigate } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';

const ProtectRoute = ({redirectPath = "/login"}) => {

    const {authenticate} = useContext(IsAuthenticate);
    

    const navigate = useNavigate();

    return (
     <div>{authenticate? <Home/> :<Login/>}</div>
  )
}

export default ProtectRoute
