import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export const NuskaList = () => {
   const [nuskas, setNuskas] = useState([])
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      getNuska()
   }, [])

   const getNuska = async () => {
      setLoading(true)
      let response = await fetch('http://entapp-001-site7.itempurl.com/api/tsk/nuska', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            "Id" : 1,
         })
      });
      let result = await response.json();
      setLoading(false)
      // console.log(result)
      setNuskas(result)
      // dispatch(loadData(result))
   }

   return (
      <div style={{padding: 15}}>
         {loading !== true ? (
            <h3 className='mb-2'>Нұсқалар</h3>
         ) : (
            <SkeletonTheme color="#e7f6fa" highlightColor="#fff">
               <Skeleton style={{...loadStyles, ...{height: 30, marginBottom: 5}}}/>
            </SkeletonTheme>
         )}
         <p>
            {loading !== true ? nuskas.map(item => (
               <Link
                  style={{marginRight: 15}}
                  className='btn btn-outline-primary'
                  key={item.id}
                  to={`/nuska/${item.id}`}
               >
                  {item.nuskaNumber} - нұсқа
               </Link>
            )) : (
               <SkeletonTheme color="#e7f6fa" highlightColor="#fff">
                  <div style={{display: 'flex'}}>
                     <Skeleton style={loadStyles}/>
                     <Skeleton style={loadStyles}/>
                     <Skeleton style={loadStyles}/>
                  </div>
               </SkeletonTheme>
            )}
         </p>
      </div>
   );
};
export const loadStyles = {
   width: 120,
   height: 37,
   marginRight: 15
}