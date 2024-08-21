
import React from 'react'
import { useSearchParams } from 'react-router-dom';

const GetQueryParameter = () => {

    const [searchParams] = useSearchParams();

  return (
    <div>

      Get Query Parameter
      <br />
      Name is: {searchParams.get("name")}
      <br />
      Age is: {searchParams.get("age")}
      <br />
      Address is: {searchParams.get("address")}
    
    </div>
  )
}

export default GetQueryParameter;
