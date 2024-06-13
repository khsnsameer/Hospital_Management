import {useState,React} from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home =()=> {
  const [Category,setCategory]=useState("All");
    return(
      <div>
        <Header/>
        <ExploreMenu Category={Category} setCategory={setCategory}/>
        <AppDownload/> 
      </div>
    )
}

export default Home;