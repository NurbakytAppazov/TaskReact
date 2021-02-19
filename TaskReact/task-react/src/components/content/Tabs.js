import React, { useEffect } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { tabToggle } from '../../jqueryHandler';
import { loadSurak, setLoadFalse, setLoadTrue } from '../../redux/actions';

export const Tabs = () => {
   const loading = useSelector(state => state.loading)
   const firstPan = useSelector(state => state.pans.firstPan)
   const pans = useSelector(state => state.pans.data)
   const surak = useSelector(state => state.surak)
   const dispatch = useDispatch()

   useEffect(() => {
      if(firstPan !== null){
         getSurak(firstPan, 0)
      }
      // console.log(surak)
   }, [firstPan])

   const getSurak = async (pId, pIndex) => {
      let localJson = localStorage.getItem('pan'+pIndex);
      let localItem;
      // localJson = (localJson === null || localJson === undefined) && true
      // console.log(localJson)
      if (localJson !== null && localJson !== undefined) {
         // console.log(localJson)
         localItem = JSON.parse(localJson)
         dispatch(loadSurak(localItem, pIndex))
      // )
      }
      else{
         if(surak[pIndex] == undefined || surak[pIndex].length === 0) {
            // console.log('oaoaooa')
            dispatch(setLoadTrue())
            let response = await fetch('http://entapp-001-site7.itempurl.com/api/tsk/surak', {
               method: 'POST',
               headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
               },
               body: JSON.stringify({ "PanId" : pId})
            });
            let result = await response.json();
            // console.log(result)
            dispatch(loadSurak(result, pIndex))
            dispatch(setLoadFalse())
            console.log(surak)
         }
      }
   }
   const surakHandler = (e, panId, pIndex) => {
      getSurak(panId, pIndex);
      tabToggle(e);
   }
   

   return (
      <div className="guide_tabs">
         {
            pans.map((item, index) => (
               <div key={item.panName+'kjnsdj'} id={'pan_'+item.id} className={index !== 0 ? "ques_block" : "ques_block act-tab"} onClick={(e) => surakHandler(e, item.id, index)}>
                  <h3 className="ques_title">
                     {item.panName}
                  </h3>
                  <div className="ques_data" style={{display: index === 0 && 'block'}}>
                     {loading !== true ? (
                        <span className="ans_wrap">
                           {surak[index] !== undefined && surak[index].map((jtem) => {
                              if(item.id === jtem.panId) {
                                 const uJauap = jtem.userJauap;
                                 return (
                                    <span key={item.id.toString()+jtem.surakNumber} className="ans_item">
                                       <span className="ans_num">{jtem.surakNumber}</span>
                                       <span className="ans_char">{uJauap !== undefined ? uJauap : '-'}</span>
                                    </span>
                                 )
                              }
                           })}
                        </span>
                        ) : (
                        <SkeletonTheme highlightColor="#e7f6fa" color="#fff">
                           <Skeleton style={{ height: 50, marginBottom: 5}}/>
                           <Skeleton style={{ height: 50}}/>
                        </SkeletonTheme>
                     )}
                  </div>
               </div>
            ))
         }
      </div>
   );
};