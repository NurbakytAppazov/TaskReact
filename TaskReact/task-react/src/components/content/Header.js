import React from 'react';

export const Header = ({burger}) => {
   return (
      <header>
        <nav>
          <button className="burger" type="button" onClick = {() => burger()}>
            <i className="fa fa-bars"></i>
          </button>
        </nav>
      </header>
   );
};