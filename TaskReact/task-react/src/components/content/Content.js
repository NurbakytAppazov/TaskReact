import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { useDispatch } from 'react-redux';
import { loadData } from '../../redux/actions';
import { Home } from '../Home';
import { NuskaList } from '../NuskaList';
import { Route, Switch } from 'react-router-dom';
import { burgerToggle } from '../../jqueryHandler';

export const Content = () => {
   const dispatch = useDispatch()
   
   const getTest = async() => {
       const save = JSON.parse(localStorage.getItem('save'));
       console.log(save)
      if (save !== null) {
         dispatch(loadData(save))
      }
      else {
          let response = await fetch('https://cors-anywhere.herokuapp.com/http://entglobus.kz/api/task/get');
         let result = await response.json();
         dispatch(loadData(result))
      }
       //setData(result)
   }
   useEffect(() => {
      getTest();
   }, [])


   

   return (
      <div className="content">
         <Header burger = {burgerToggle}/>
         <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/nuskalist' component={NuskaList}/>
         </Switch>
      </div>
   );
};