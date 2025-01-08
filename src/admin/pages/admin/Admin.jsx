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
    case '/dashboard':
      headerText = 'Dashboard';
      break;
    case '/Domainlist':
      headerText = 'Domain List';
      break;
    case '/Expired':
      headerText = 'Expiring/Expired';
      break;
    case '/Hosting':
      headerText = 'Hosting';
      break;
    case '/Privateemail':
      headerText = 'Private Email';
      break;
    case '/Sslcertificate':
      headerText = 'SSL Certificate';
      break;
    case '/Profile':
      headerText = 'Profile';
      break;
    case '/cart':
      headerText = 'Dashboard > Cart';
      break;
    default:
      headerText = 'Dashboard';
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


// Sidebar is necessary and needs to have just 3 "options"
// Instead of Dashboard - Upcoming matches
// Instead of Domain List - Upcoming tournaments/events
// Instead of Expiring/Expired - Calendar
// Instead of SSL Certificate - History