import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firstPan, loadPans } from '../redux/actions';
import { TabBody } from './content/TabBody';
import { Tabs } from './content/Tabs';

export const Home = ({match}) => {
   const [finish, setFinish] = useState(null)
   const nuskaId = match.params.id;

   const dispatch = useDispatch()

   useEffect(() => {
      getPan()
   }, [])
   
   const getPan = async () => {
      const userId = sessionStorage.getItem('user')
      let response = await fetch('http://entapp-001-site7.itempurl.com/api/tsk/pan', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({"NuskaId" : nuskaId, "UserId": userId})
      });
      let result = await response.json();
      // console.log(result)
      dispatch(loadPans(result))
      dispatch(firstPan(result[0].id))
   }

   const finishHandler = () => {
      const save = JSON.parse(localStorage.getItem('save'));

      let counter = 0;
      if(save !== null){
         save.map((item) => {
            item.ques.map((jtem) => {
   
               if (jtem.userJauap !== (undefined || null)){
                  if(jtem.userJauap === jtem.jauap) {
                     counter ++;
                  }
               }
            })
         });
         setFinish(counter)
      }
      else{
         setFinish(0)
      }
   }

   return (
      <>
         <section className="test_page">
            <Tabs/>
            <TabBody/>
         </section>
         <div>
            <button onClick={() => finishHandler()} >FINISH</button>
         </div>
         {finish !== null && (
            <div>
               <p>барлык дурыс жауап: {finish}</p>
            </div>
         )}
      </>
   );
};