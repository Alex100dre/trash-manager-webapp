import React from 'react';
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import CurrentTrash from "./pages/CurrentTrash/CurrentTrash";
import {Day, TrashVariant} from "./types/trash.type";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<CurrentTrash trash={{
              id: TrashVariant.Yellow,
              takeOutDays: [Day.Tuesday, Day.Wednesday],
              lastTakeOutDate: null
            }} />}>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
