import React,{useEffect, useState} from 'react'
import t4Api from '../configs/t4Api'


const Home = () => {
    useEffect(() => {
        t4Api.serverAuth({server_id:1, datasource_id:4}).then((response) => {
            console.log(response)
        })
    },[])

  return (
    <div>Home</div>
  )
}

export default Home