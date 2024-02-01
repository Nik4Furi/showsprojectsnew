import React from "react";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Movie from "./components/Movie";

const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element ={<Home/>} ></Route>
      <Route path = "/movie" element = {<Movie/>}></Route>
    </Routes>

    </BrowserRouter>
  
  );


};

export default App;
