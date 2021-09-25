import React from 'react'
import Projects from './Projects'
import Propwork from './Propwork'


export default function Work() {
    return (
        <>
            <div id="work" className="work">
            <div  style={{textAlign:'center' ,marginBottom:'60px', fontSize:'30px', color:'var(--green)'}}>&lt;Work/&gt;</div>
            <div className="work_projects">

            {Projects.map(  (val)=>{

             return <Propwork name={val.name} img={val.img} tech={val.tech} link={val.link} code={val.code}/>

            
            })}


            </div>
            </div>
        </>
    )
}
