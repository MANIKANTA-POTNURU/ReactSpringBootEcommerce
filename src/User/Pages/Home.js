import MotionHoc from "./MotionHoc";
import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom"; // Import useNavigate and useEffect
const HomeComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    
    let username = sessionStorage.getItem("uname");
    if (username === "" || username === null) {
      navigate("/login");
    }
  }, []); 

  return <h1>Home</h1>;
};

const Home = MotionHoc(HomeComponent);

export default Home;
