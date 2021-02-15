import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Tabs = ({toggle}) => {

   let data = useSelector(state => state.load.data)

   // const save = JSON.parse(localStorage.getItem('save'));
   // if(save !== (null || undefined)){
   //    data = save;
   // }
   
   useEffect(() => {
      console.log('reeeeender')
   }, [data])

   return (
      <div className="guide_tabs">
         {
            data !== null &&
            data.pans.map((i, index) => (
               <a key={i.name} id={i.name} className={index !== 0 ? "ques_block" : "ques_block act-tab"} onClick={(e) => toggle(e)}>
                  <h3 className="ques_title">
                     {i.name}
                  </h3>
                  <p className="ques_data" style={{display: index === 0 && 'block'}}>
                     {
                        i.ques.map((jtem) => 
                           (
                              <span key={jtem.number + 'asdsasd'}>
                                 {jtem.number + '. ' + (jtem.userJauap !== undefined ? jtem.userJauap : '–')}
                                 <br/>
                              </span>
                           )
                        )
                     }
                     {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Eligendi, explicabo temporibus eum est quas molestias iste
                     sequi iure perspiciatis cumque eos? Dignissimos ullam pariatur
                     sequi placeat velit ad consequuntur praesentium! */}
                  </p>
               </a>
            ))
         }
      </div>
   );
};