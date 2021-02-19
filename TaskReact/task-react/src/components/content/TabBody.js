import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { answerHandler, limitHandler } from '../../jqueryHandler';
import { setSurak } from '../../redux/actions';

export const TabBody = () => {
   
   const loading = useSelector(state => state.loading)
   const pans = useSelector(state => state.pans.data)
   const surak = useSelector(state => state.surak)
   const dispatch = useDispatch()


   const saveHandler = (e, limit, panId, surIndex) => {
      const checked = e.target.checked;
      // console.log(limitHandler(e, limit))
      if (limitHandler(e, limit) !== false) {   
         pans.map((item, index) => {
            // localStorage.removeItem('pan'+index);
            if (item.id === panId) {
               surak[index].map((jtem, jndex) => {
                  if (jndex === surIndex) {
                     let uj = jtem.userJauap;
                     if (uj !== undefined && jtem.jauapSani > 1) {
                        if (checked === true){
                           if (uj === '-') {
                              jtem.userJauap = e.target.value;
                           }
                           else{
                              jtem.userJauap += ',' + e.target.value;
                           }
                        }
                        else{
                           for (let i = 0; i < uj.length; i++) {
                              if (uj[i] === e.target.value) {
                                 if (i > 0) {
                                    uj = uj.replace(','+uj[i], '');
                                 }
                                 else{
                                    if (uj.length > 1) {
                                       uj = uj.replace(uj[i]+',', '');
                                    }
                                    else{
                                       uj = uj.replace(uj[i], '-');
                                    }
                                 }
                              }
                           }
                           jtem.userJauap = uj;
                        }
                     }
                     else {
                        jtem.userJauap = e.target.value;
                     }
                     // localStorage.setItem('pan'+index, JSON.stringify(surak[index]));
                     dispatch(setSurak(jtem.userJauap, index))
                  }
               })
               // console.log(surak)
            }
         })
      }
   }
   
   return (
      <div className="result">
         {pans.map((item, index) => (
            <div
               key={item.id}
               className={index === 0 ? "result-item act-result" : "result-item"}>
                  {loading !== true ? 
                  (surak[index] !== undefined && surak[index].map((jtem, jndex) => {
                  const type = jtem.jauapSani > 1 ? 'checkbox' : 'radio';
                  return (
                     <div key={jtem.surakName} className={jndex === 0 ? "answer act-answer" : "answer"}>
                        <ul>
                           <li className="ans_text">{jtem.surakNumber + '. ' + jtem.surakName}</li>
                           <li>
                              {(jtem.surakUrl !== null && jtem.surakUrl !== undefined) && (
                                 <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.surakUrl}`}/>
                              )}
                           </li>
                           <li>
                              <label className="ans_surak_block">
                                 <input type={type} name={jtem.surakName} value="A" onChange={(e) => saveHandler(e, jtem.jauapSani, jtem.panId, jndex)} defaultChecked={(jtem.userJauap !== undefined && jtem.userJauap.includes("A")) ? true : false} />
                                 <span className="ans_jauap_wrap">
                                    <span className="ans_jauap_char">A</span>
                                    {jtem.url !== true ? (
                                       <span className="ans_jauap_text">{jtem.a}</span>
                                    ) : (
                                       <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.a}`}/>
                                    )}
                                 </span>
                              </label>
                           </li>
                           <li>
                              <label className="ans_surak_block">
                                 <input type={type} name={jtem.surakName} value="B" onChange={(e) => saveHandler(e, jtem.jauapSani, jtem.panId, jndex)} defaultChecked={(jtem.userJauap !== undefined && jtem.userJauap.includes("B")) ? true : false} />
                                 <span className="ans_jauap_wrap">
                                    <span className="ans_jauap_char">B</span>
                                    {jtem.url !== true ? (
                                       <span className="ans_jauap_text">{jtem.b}</span>
                                    ) : (
                                       <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.b}`}/>
                                    )}
                                 </span>
                              </label>
                           </li>
                           <li>
                              <label className="ans_surak_block">
                                 <input type={type} name={jtem.surakName} value="C" onChange={(e) => saveHandler(e, jtem.jauapSani, jtem.panId, jndex)} defaultChecked={(jtem.userJauap !== undefined && jtem.userJauap.includes("C")) ? true : false} />
                                 <span className="ans_jauap_wrap">
                                    <span className="ans_jauap_char">C</span>
                                    {jtem.url !== true ? (
                                       <span className="ans_jauap_text">{jtem.c}</span>
                                    ) : (
                                       <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.c}`}/>
                                    )}
                                 </span>
                              </label>
                           </li>
                           <li>
                              <label className="ans_surak_block">
                                 <input type={type} name={jtem.surakName} value="D" onChange={(e) => saveHandler(e, jtem.jauapSani, jtem.panId, jndex)} defaultChecked={(jtem.userJauap !== undefined && jtem.userJauap.includes("D")) ? true : false} />
                                 <span className="ans_jauap_wrap">
                                    <span className="ans_jauap_char">D</span>
                                    {jtem.url !== true ? (
                                       <span className="ans_jauap_text">{jtem.d}</span>
                                    ) : (
                                       <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.d}`}/>
                                    )}
                                 </span>
                              </label>
                           </li>
                           <li>
                              <label className="ans_surak_block">
                                 <input type={type} name={jtem.surakName} value="E" onChange={(e) => saveHandler(e, jtem.jauapSani, jtem.panId, jndex)} defaultChecked={(jtem.userJauap !== undefined && jtem.userJauap.includes("E")) ? true : false} />
                                 <span className="ans_jauap_wrap">
                                    <span className="ans_jauap_char">E</span>
                                    {jtem.url !== true ? (
                                       <span className="ans_jauap_text">{jtem.e}</span>
                                    ) : (
                                       <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.e}`}/>
                                    )}
                                 </span>
                              </label>
                           </li>
                           <li>
                              <label className="ans_surak_block">
                                 <input type={type} name={jtem.surakName} value="F" onChange={(e) => saveHandler(e, jtem.jauapSani, jtem.panId, jndex)} defaultChecked={(jtem.userJauap !== undefined && jtem.userJauap.includes("F")) ? true : false} />
                                 <span className="ans_jauap_wrap">
                                    <span className="ans_jauap_char">F</span>
                                    {jtem.url !== true ? (
                                       <span className="ans_jauap_text">{jtem.f}</span>
                                    ) : (
                                       <img className="ans_jauap_text" src={`http://entapp-001-site7.itempurl.com${jtem.f}`}/>
                                    )}
                                 </span>
                              </label>
                           </li>
                           <li>дурыс жауап {jtem.jauap}</li>
                           <li>{jtem.jauapSani}</li>
                        </ul>
                        <div className="btn_pager_wrap">
                           {jndex !== 0 && (
                              <button className="page_prev" onClick={() => answerHandler('prev')}>
                                 <i className="fa fa-long-arrow-alt-left"></i>
                                 <span>Артқа</span>
                              </button>
                           )}
                           {jndex !== surak[index].length-1 && (
                              <button className="page_next" onClick={() => answerHandler('next')}>
                                 <span>Келесі</span>
                                 <i className="fa fa-long-arrow-alt-right"></i>
                              </button>
                           )}
                        </div>
                     </div>
                  )}))
                  : (
                     <SkeletonTheme color="#e7f6fa" highlightColor="#fff">
                        <div className="answer act-answer">
                           <Skeleton style={{minHeight: 400, lineHeight: '400px'}} />
                        </div>
                     </SkeletonTheme>
                  )
               }
            </div>
         ))}
      </div>
   );
};
