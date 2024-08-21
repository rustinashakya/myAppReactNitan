
import React from 'react'
import {useParams} from 'react-router-dom'

// useParams()              //to get route parameter
// useSearchParams()        //to get query parameter or search parameter
// useNavigate()            //to change path onClick event

const GetDynamicRouteParamter = () => {
    const params1 = useParams();
    
  return (
    <div>
      GetDynamicRouteParamter <br />
      {params1.id1}           <br />
      {params1.id2}           <br />
    </div>
  )
}

export default GetDynamicRouteParamter
