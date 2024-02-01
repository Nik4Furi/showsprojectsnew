import React from 'react'
import Navbar from  "./Navbar";
import Cards from "./Cards";
import { useState,useEffect } from "react";
import Spinner from "./Spinner";
import {toast} from "react-toastify";
import { apiUrl } from "../data";


const Home = () => {
    const [shows, setShows] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output -> 
      setShows(output);
      console.log(output)
    }
    catch(error) {
        toast.error("Network Error");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
        <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>
      <div className="bg-bgDark2">
        
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
            loading ? (<Spinner/>) : (<Cards shows={shows} />)
          }
        </div>
      </div>


    </div>
    </div>
  )
}

export default Home
