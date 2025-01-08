import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

const Home = ({searchQuery}) => {
  const [category, setCategory] = useState('All');
  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory} searchQuery={searchQuery}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
