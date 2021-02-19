import React from 'react';
import { burgerToggle } from '../../jqueryHandler';

export const Header = () => {
   return (
      <header>
        <nav>
          <button className="burger" type="button" onClick = {() => burgerToggle()}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>
   );
};