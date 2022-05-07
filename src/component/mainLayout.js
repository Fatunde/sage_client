import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './navbar';
import { Contexts } from './context';
import SideBar from './sidebar';
import LoadingOverlay from 'react-loading-overlay';

export default function Route(){
  const {state} = Contexts()
       return ( 
            <>
          <SideBar/>
            <div className="main-content">
           <Navbar/>
           <LoadingOverlay
            active={state.loading}
            spinner 
            text='Loading...'
            >
            <div className='home-container'>
           <Outlet/>
           </div>
           </LoadingOverlay>
           </div>
           </>)}