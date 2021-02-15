import React, { useState } from 'react';
import { tabToggle } from '../jqueryHandler';
import { TabBody } from './content/TabBody';
import { Tabs } from './content/Tabs';

export const Home = () => {
   const [finish, setFinish] = useState(null)

   const finishHandler = () => {
      const save = JSON.parse(localStorage.getItem('save'));

      let counter = 0;
      save.pans.map((item) => {
         item.ques.map((jtem) => {

            if (jtem.userJauap !== (undefined || null)){
               if(jtem.userJauap === jtem.jauap) {
                  counter ++;
               }
            }
         })
      })
      setFinish(counter)
      // console.log()
   }

   return (
      <>
         <section className="test_page">
            <Tabs
               toggle = {tabToggle}
               // data = {data !== null ? data : null}
            />
            <TabBody
               // data = {data !== null ? data : null}
            />
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