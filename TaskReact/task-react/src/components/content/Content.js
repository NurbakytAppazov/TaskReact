import React from 'react';
import { Header } from './Header';
import { Home } from '../Home';
import { NuskaList } from '../NuskaList';
import { Route, Switch } from 'react-router-dom';

export const Content = () => {
   // const dispatch = useDispatch()
   
   // const getTest = async() => {
   //    const save = JSON.parse(localStorage.getItem('save'));

   //    if (save !== null) {
   //       dispatch(loadData(save))
   //    }
   //    else {
   //       let response = await fetch('http://entglobus.kz/api/task/get');
   //       let result = await response.json();
   //       dispatch(loadData(result.pans))
   //    }
   // }
   // useEffect(() => {
   //    getTest();
   // }, [])


   

   return (
      <div className="content">
         <Header/>
         <Switch>
            {/* <Route path='/' exact component={Home}/> */}
            <Route path='/' exact component={NuskaList}/>
            <Route path='/nuskalist' exact component={NuskaList}/>
            <Route path='/nuska/:id' component={Home}/>
         </Switch>
      </div>
   );
};