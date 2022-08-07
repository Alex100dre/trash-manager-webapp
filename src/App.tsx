import React, {useEffect} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import { Content } from './App.style'
import TodaysRemoval from "./pages/TodaysRemoval/TodaysRemoval";
import {fetchTrashes, selectTodaysRemoval} from "./store/trash/trash.slice";
import {useAppDispatch, useAppSelector} from "./hooks";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
    const dispatch = useAppDispatch();
    const todaysRemoval = useAppSelector(selectTodaysRemoval) || null;

    useEffect(() => {
        dispatch(fetchTrashes())
    }, [dispatch])

    // TODO: lazyload routes (CF: https://linguinecode.com/post/code-splitting-react-router-with-react-lazy-and-react-suspense)

  return (
      <BrowserRouter>
        <MainHeader />
        <Content>
          <Routes>
            <Route path="/" element={<TodaysRemoval removal={todaysRemoval} />}>
            </Route>
          </Routes>
        </Content>
      </BrowserRouter>
  );
}

export default App;
