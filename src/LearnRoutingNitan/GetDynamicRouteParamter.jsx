
import React from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

// useParams()              //to get route parameter
// useSearchParams()        //to get query parameter or search parameter
// useNavigate()            //to change path onClick event

const GetDynamicRouteParamter = () => {
    const params1 = useParams();
    const params2 = useSearchParams();
    const params3 = useNavigate();
  return (
    <div>
      GetDynamicRouteParamter <br />
      {params1.id1}           <br />
      {params1.id2}           <br />
    </div>
  )
}

export default GetDynamicRouteParamter
