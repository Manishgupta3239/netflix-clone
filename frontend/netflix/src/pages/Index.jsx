import React from 'react'
import Hero from '../components/Hero'
import Trending from '../components/Trending'
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

