
import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetNavigate = () => {

    const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>{
        // navigate("/contact")
        // replace makes it to remove the previous route and redirects directly to the home page

        navigate("/contact", {replace: true});          
      }}>go to contact page</button>
    </div>
  )
}

export default GetNavigate
