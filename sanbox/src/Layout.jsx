import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PopupDemo from './PopupDemo';
import ModalDemo from './ModalDemo';

function Layout() {
  // Tailwind-based dynamic class
  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'text-white bg-blue-600 px-4 py-2 rounded font-semibold'
      : 'text-gray-700 px-4 py-2 rounded hover:bg-gray-200';

  return (
    <>
    <PopupDemo></PopupDemo>
    <ModalDemo></ModalDemo>
      <nav className="flex gap-4 bg-gray-100 p-4 shadow">
        <NavLink to="home" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="about" className={navLinkClass}>
          About
        </NavLink>
        <NavLink to="contact" className={navLinkClass}>
          Contact
        </NavLink>
        <NavLink to="products" className={navLinkClass}>
          Products
        </NavLink>
      </nav>

      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
