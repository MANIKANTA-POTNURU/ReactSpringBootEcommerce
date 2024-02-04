import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./User/Sidebar";
import Home from "./User/Pages/Home";
import Team from "./User/Pages/Team";
import Calender from "./User/Pages/Calender";
import Documents from "./User/Pages/Documents";
import Projects from "./User/Pages/Projects";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import Registration from "./User/Authorization/Registration";

import { ToastContainer } from 'react-toastify';
import Login from "./User/Authorization/Login";
import Category from "./User/Pages/Category/Category";
const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    
    <>
     <ToastContainer>
        
        </ToastContainer>
     <Routes>
     <Route path="/register" element={<Registration />} />
     <Route path='/login' element={<Login/>}></Route>
     
     </Routes>

      <Sidebar />
      <Pages>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route path="/" element={<Home />} />
            
            <Route path="/team" element={<Team />} />
            <Route path="/calender" element={<Calender />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/projects" element={<Projects />} />
            

          </Routes>
        </AnimatePresence>
      </Pages>
     

      
     {/* <Category/> */}
    </>
    
  );
}

export default App;
