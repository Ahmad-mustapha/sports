import React, { useState, useEffect } from 'react'
import { Adminheader, Adminsidebar } from '../../components'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import './admin.css'

const Admin = () => {
  const location = useLocation();
  const [ locate, setLocate ] = useState(location)
  const userEmail = localStorage.getItem('userEmail')

  let headerText = '';
  // console.log(location.pathname);
  switch (location.pathname) {
    case '/matches':
      headerText = 'Upcoming matches';
      break;
    case '/tournament':
      headerText = 'Upcoming Tournaments';
      break;
    case '/calender':
      headerText = 'Calender';
      break;
    case '/history':
      headerText = 'History';
      break;
    default:
      headerText = 'Upcoming matches';
  }
  return (
    <div className='layout overflow-x-hidden bg-white h-screen'>
      <div className='border[1px] h-0 border-black lg:h-screen fixed top-0 left-0 bottom-0 lg:w-[300px] w-full'>
       <Adminsidebar />
      </div>
      <div className='w-full'>
          <Adminheader />
          <div className='lg:ml-[300px]'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Admin