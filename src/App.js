import React,{Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Componant/Nav/Nav';
import Aside from './Componant/Aside/Aside';
import Login from './Componant/mode/login/logModel';

const Index=()=> {
  return(
    <Fragment>
      <Nav/>
      <Outlet/>
      <Aside/>
      <Login/>
    </Fragment>
  )
  
    
    
    
}

export default Index;
