import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answerHandler } from '../../jqueryHandler';
import { setData } from '../../redux/actions';

export const TabBody = () => {

   const data = useSelector(state => state.load.data)
   const dispatch = useDispatch()

   const saveHandler = (e) => {
      data.pans.map((item) => {
         if ( item.name === e.target.title ) {
            item.ques.map((jtem, jndex) => {
               if (jtem.number === parseInt(e.target.id)) {
                  jtem.userJauap = e.target.value;
               }
            })
         }
      })
      dispatch(setData(data))
      // localStorage.setItem('save', JSON.stringify(data));
      // console.log(data.pans)
   }

   useEffect(() => {
      console.log(data)
   }, [])
   
   return (
      <div className="result">
         {
            data !== null &&
            data.pans.map((item, index) => (
               <div key={item.name} className={index === 0 ? "result-item act-result" : "result-item"}>
                  {item.ques.map((jtem, jndex) => (
                     <ul key={item.name+'surak'+jtem.number} className={jndex === 0 ? "answer act-answer" : "answer"}>
                        <li>{jtem.number + '. ' + jtem.surak}</li>
                        <li>
                           <label>
                              <input type="radio" name={jtem.surak} id={jtem.number} title={item.name} value="A" onChange={(e) => saveHandler(e)} defaultChecked={jtem.userJauap === "A" ? true : false} />
                              A) {jtem.a}
                           </label>
                        </li>
                        <li>
                           <label>
                              <input type="radio" name={jtem.surak} id={jtem.number} title={item.name} value="B" onChange={(e) => saveHandler(e)} defaultChecked={jtem.userJauap === "B" ? true : false} />
                              B) {jtem.b}
                           </label>
                        </li>
                        <li>
                           <label>
                              <input type="radio" name={jtem.surak} id={jtem.number} title={item.name} value="C" onChange={(e) => saveHandler(e)} defaultChecked={jtem.userJauap === "C" ? true : false} />
                              C) {jtem.c}
                           </label>
                        </li>
                        <li>
                           <label>
                              <input type="radio" name={jtem.surak} id={jtem.number} title={item.name} value="D" onChange={(e) => saveHandler(e)} defaultChecked={jtem.userJauap === "D" ? true : false} />
                              D) {jtem.d}
                           </label>
                        </li>
                        <li>
                           <label>
                              <input type="radio" name={jtem.surak} id={jtem.number} title={item.name} value="E" onChange={(e) => saveHandler(e)} defaultChecked={jtem.userJauap === "E" ? true : false} />
                              E) {jtem.e}
                           </label>
                        </li>
                        <li>дурыс жауап {jtem.jauap}</li>
                        <br/>
                        <button onClick={() => answerHandler('prev')} style={{display: jndex === 0 && 'none'}}>«Prev</button>
                        <span>___________</span>
                        <button onClick={() => answerHandler('next')} style={{display: jndex === item.ques.length-1 && 'none'}}>Next»</button>
                     </ul>
                  ))}
               </div>
            ))
         }
      </div>
   );
};