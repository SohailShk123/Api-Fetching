import React from 'react'
import './Home.css'
import axios from 'axios'


function Home() {

  const Api1 = async () => {
    const { data } = await axios.get('/posts')
    console.log(data);
  }
  const Api2 = async () => {
    const { data } = await axios.get('/comments')
    console.log(data);
  }
  const Api3 = async () => {
    const { data } = await axios.get('/albums')
    console.log(data);
  }
  const Api4 = async () => {
    const { data } = await axios.get('/photos')
    console.log(data);
  }
  const Api5 = async () => {
    const { data } = await axios.get('/users')
    console.log(data);
  }

  return (

    <div>
      <button onClick={() => Api1()}>Click here</button>
      <button onClick={() => Api2()}>To get</button>
      <button onClick={() => Api3()}>Api's</button>
      <button onClick={() => Api4()}>In</button>
      <button onClick={() => Api5()}>Console</button>
    </div>

  )
}

export default Home