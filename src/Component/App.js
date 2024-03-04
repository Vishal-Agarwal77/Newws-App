import '../App.css';
import Navbar from './Navbar';
import Newsitem from './Newsitem';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";


export default function App() {
  const [progress, setprogress] = useState(0);
  return (
    <>
      <div className='bg-[#f9f4ed] w-full h-screen'>
        <BrowserRouter>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress} />
          <Routes>
            <Route exact path='/latestNews/:Category' element={<Newsitem setProgress={setprogress} SearchQuery={false}/>} />
            <Route path='/search?' element={<Newsitem setProgress={setprogress} SearchQuery={true}/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

