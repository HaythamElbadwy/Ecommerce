import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import styles from './ManagePlaylistRouting.module.css';
import { useTranslation } from 'react-i18next';
import whatsapp from '../../assets/Image/whatsappimg.jpeg';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import'../../lang.jsx'
import cookies from 'js-cookie';

function ManagePlaylistRouting() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();  

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Wish");
    window.location.reload();
  };


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <FloatingWhatsApp phoneNumber="+1234567890" 
        accountName="WishTV"  
        avatar={whatsapp} 
        statusMessage="Typically replies within 1 hour"
        chatMessage="Hello! How can we help you?"
        allowEsc
        allowClickAway
        className='text-black w-[18rem]'
        placeholder='Send Us Your Proplem'>
      </FloatingWhatsApp>
      <div className="container mx-auto px-4 py-6 flex md:justify-center flex-col md:flex-row md:items-start md:gap-16 md:mt-20 w-full">
        {/* Mobile Header */}
        <header className={`${styles.managePlaylist_header} md:hidden flex justify-around items-center mb-[1rem]`}>
          <h1 className="text-2xl font-bold text-[#3C3C3C]">{('ManagePlaylistTitle')}</h1>
          <button onClick={toggleMenu} className="text-black w-8">
            {isMenuOpen ? <X size={20} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Sidebar / Navbar */}
        <nav id="sideBar" className={`bg-black text-white rounded-lg ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="text-[18px] font-[600] flex flex-col md:w-64 p-4 gap-4">
            <NavItem to="" icon="icon-[mdi--view-dashboard-edit-outline]" end>
              {t('Manage Playlist')}
            </NavItem>
            <NavItem to="activatedevices" icon="icon-[icon-park-outline--play]">
              {t('Activate Devices')}
            </NavItem>
            <NavItem to="switchmac" icon="icon-[mi--switch]">
              {t('Switch Mac')}
            </NavItem>
            <NavItem to="parentpin" icon="icon-[ri--parent-line]">
              {t('Parent Pin')}
            </NavItem>
            <NavItem to="accountdetails" icon="icon-[iconamoon--profile]">
              {t('Account Details')}
            </NavItem>
            <NavItem to="/" icon="icon-[tabler--logout-2]" onClick={handleLogout}>
              {t('Logout')}
            </NavItem>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="flex mt-[0.25rem] md:mt-0 md:w-[80%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function NavItem({ to, icon, children, onClick, end }) {
  return (
    <li>
      <NavLink
        to={to}
        end={end}
        onClick={onClick}
        className={({ isActive }) =>
          `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'text-[#DC97E2]' : 'text-white'
          } hover:bg-white hover:text-black`
        }
      >
        <span className={`${icon} text-2xl shrink-0`}></span>
        <span className="listTitle">{children}</span>
      </NavLink>
    </li>
  );
}

export default ManagePlaylistRouting;

