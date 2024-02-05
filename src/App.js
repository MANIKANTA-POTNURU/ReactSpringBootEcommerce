import { Route, Routes, useLocation } from "react-router";
import Registration from "./Authorization/Registration";
import { ToastContainer } from 'react-toastify';
import Login from "./Authorization/Login";
import Admin from "./Admin/Admin";
import User from "./User/User";
function App() {
  return (
    
    <>
     <ToastContainer>
        
    </ToastContainer>
     <Routes>
     <Route path='/login' element={<Login/>}/>
     <Route path="/admin/*" element={<Admin />} />
     <Route path="/user/*" element={<User/>} />
     <Route path="/register" element={<Registration />} />
     
     </Routes>

     
    </>
    
  );
}

export default App;
