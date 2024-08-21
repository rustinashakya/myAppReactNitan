
import React from 'react'
import { Navigate } from 'react-router-dom'

const Error = () => {
  // return (
  //   <div>
  //     404 (Page Not Found.)
  //   </div>
  // )
  // or navigate to home page if other paths is shown
  return <Navigate to={"/"}></Navigate>
}

export default Error

