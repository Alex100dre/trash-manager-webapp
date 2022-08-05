import React, {useEffect} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './App.css';
import TodaysRemoval from "./pages/TodaysRemoval/TodaysRemoval";
import {fetchTrashes, selectTodaysRemoval} from "./store/trash/trash.slice";
import {useAppDispatch, useAppSelector} from "./hooks";

function App() {
    const dispatch = useAppDispatch();
    const todaysRemoval = useAppSelector(selectTodaysRemoval) || null;

    useEffect(() => {
        dispatch(fetchTrashes())
    }, [dispatch])

  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<TodaysRemoval removal={todaysRemoval} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
