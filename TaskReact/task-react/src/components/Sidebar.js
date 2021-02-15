import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/img/task-logo.jpg';

export const Sidebar = () => {
   const pages = [
      { name: 'Басты бет', icon: 'fa fa-home', href: '/' },
      { name: 'Нұсқалар', icon: 'fa fa-bars', href: '/nuskalist' },
      { name: 'Профиль', icon: 'fa fa-user', href: 'index.html' },
      { name: 'Шығу', icon: 'fa fa-sign-out-alt', href: 'index.html' }
   ];

   return (
      <div className="sidebar">
         <a className="logo" href="index.html">
            <img src={logo} alt="Task"/>
         </a>
         <div className="pages">
            {pages.map(i => (
               <Link key={i.name} to={i.href}>
                  <i className={i.icon}></i>
                  <span>{i.name}</span>
               </Link>
            ))}
         </div>
      </div>
   );
};