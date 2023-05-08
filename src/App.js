import React from 'react';

import EmpTable from "./EmpTable"
import Emp from "./EmpForm"
import EmpEdit from "./EmpEdit"
import EmpDetails from "./EmpDetails"
import Login from "./Login"
import SignUp from "./Registration"
import Home from "./Home"
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom"

function App(){
  return(
    <div >
       <Router>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Signup" element={<SignUp/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
          <Route path="/EmpTable" element={<EmpTable/>}></Route>
          <Route path="/form" element={<Emp/>}></Route>
          <Route path="/empedit/:empid" element={<EmpEdit/>}></Route>
          <Route path="/empdetails/:empid" element={<EmpDetails/>}></Route>
        </Routes>
       </Router>
    </div>
  )
}
export default App