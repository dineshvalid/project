import React, { useState  } from "react";
import {
  useNavigate,
} from 'react-router-dom';

function Home(){

    const navigate = useNavigate();

  const check = () => {
    navigate("/about")
    }

    return(
        <div>
          <h1>HOME COMPONENT</h1>
           
        </div>
    )

}

export default Home