import React,{useEffect} from 'react'
import axios from 'axios'

function Test() {

  useEffect(()=>{
    axios.get('http://10.89.189.102/demoAPI/public/api/users')
    .then(res=>{
      console.log(res.data)
    }).catch(error =>{
      console.log(error)
    })
  })
  
  return (
    <div>
      
    </div>
  )
}

export default Test
