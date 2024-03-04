import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
// import { actionCreators } from './state/index';
import searchfn from '../state/action-creators';


export default function Navbar() {
    const dispatch = useDispatch();
    const search = useSelector(state => state.search);
    const [CurrentTab, setCurrentTab] = useState();
    const navigate=useNavigate();
    const InputValue=useRef(null);
    useEffect(() => {
        if(window.location.href.includes("latestNews")){
            setCurrentTab("LatestNews");
        }
    }, []);
    const Searchfn=()=>{
        let query=InputValue.current.value.replaceAll(" ","%");
        console.log(query);
        if(query){
            navigate(`search?${query}`);
        }
    }
    return (
        <div className='flex justify-between items-center px-8 py-4'>
            <div className='flex gap-x-6'>
                <p className={`text-xl cursor-pointer ${CurrentTab==="Neews" ? "text-[#AF695C]" : "text-black" }`}>Neews</p>
                <Link to='/latestNews/general' className={`text-xl cursor-pointer ${CurrentTab==="LatestNews" ? "text-[#AF695C]" : "text-black" }`} onClick={()=>setCurrentTab("LatestNews")}>Latest News</Link>
                <p className={`text-xl cursor-pointer ${CurrentTab==="ContactUs" ? "text-[#AF695C]" : "text-black" }`}>Contact us</p>
            </div>
            <div className='flex p-2.5 border-2 border-[#AF695C] items-center w-[25rem] gap-x-3 rounded-xl bg-[#F9F4ED]'>
                <input ref={InputValue} placeholder='Search' type='text' className='w-full bg-transparent text-[#AF695C] outline-none placeholder:text-[#AF695C]'/>
                <i className="fa-solid fa-magnifying-glass cursor-pointer" style={{color: "#af695c"}} onClick={Searchfn}></i>
            </div>
        </div>
    )
}