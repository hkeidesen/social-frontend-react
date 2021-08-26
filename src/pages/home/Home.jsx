// import React from 'react';  //after React 17.xx this import is no longer neccessary
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/Feed'
import './home.css'


export default function Home(){
    return (
        <>
        <Topbar />
        <div className="homeContainer">
            <Leftbar />
            <Feed />
            <Rightbar />
        </div>
        
        
        
        </>
    )
}