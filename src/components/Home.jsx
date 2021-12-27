import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import { useState } from "react"

import * as style from './Home_style.css'

function Home() {

    const [toggleState, setToggleState] = useState(1);

    return (
        
        <div className={style.Container}>
            <Navbar setToggleState={setToggleState} toggleState={toggleState}/>
            <div className={toggleState === 1 ? style.ActiveContent : style.Content}>
            <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="All" tags={["emotion","react"]}/> 
      <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
             <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
            </div>

            <div className={toggleState === 2 ? style.ActiveContent : style.Content}>
            <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="Stylng" tags={["emotion","react"]}/> 
      <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
             <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
            </div>

            <div className={toggleState === 3 ? style.ActiveContent : style.Content}>
            <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
      <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
             <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
            </div>

            <div className={toggleState === 4 ? style.ActiveContent : style.Content}>
            <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
      <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
             <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
            </div>

            <div className={toggleState === 5 ? style.ActiveContent : style.Content}>
            <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
      <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
             <Card description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book." title="REACT-EMOTIONS-CSS" tags={["emotion","react"]}/> 
            </div>
            
        </div>
    )
}

export default Home
