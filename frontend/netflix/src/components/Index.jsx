import React from 'react'
import Hero from './Hero'
import Trending from './Trending'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Index = () => {
  const authenticate = JSON.parse(localStorage.getItem('authenticate'));
  const navigate = useNavigate()
  
  useEffect(() => {
    if( authenticate){
      return navigate("/home");
    }
  }, [])

  return (
    <div>
      <Hero/>
      <Trending/>

    </div>
  )
}

export default Index

