import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Auth } from './components/auth/Auth';
import { Main } from './components/Main';
import { signIn } from './redux/actions';

const App = () => {
  const dispatch = useDispatch()
  const userId = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(signIn(sessionStorage.getItem('user')));
  }, [])

  return (
    userId !== null ? <Main/> : <Auth userId={userId}/>
  );
}

export default App;
