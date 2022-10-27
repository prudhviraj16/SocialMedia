import React from 'react'
import './home.css'
import { useSelector } from 'react-redux';
import modeReducer from './../../redux/Darkmode/reducer';
import Stories from './../../components/Stories/Stories';
import Posts from './../../components/Posts/Posts';
const Home = () => {

  const mode = useSelector((state)=>state.modeReducer.mode)

  return (
    <div className={ mode ? 'home dark' : 'home'}>
        <Stories/>
        <Posts/>
    </div>
  )
}

export default Home 