import React,{useState} from 'react'
import './Page.css'

const Page = () => {
    const [color,setcolor] =useState("red") 
    const [hide,display] = useState("hidden")
    var sheight = window.innerHeight/2;
    var swidth = window.innerWidth/2;


    const chngcolor =()=>{

        setcolor("green")
        display("")
    }
    
    return (
        <div>
            <div style={{height:sheight,width:swidth,background:color,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}}>
            </div>
            <br />
            <br />
<div style={{position:"absolute",top:"90%",left:"50%",transform:"translate(-50%,-50%)"}}>
<button style={{height:"3rem",width:"7rem",background:"red",color:"white",border:"none"}} onClick={chngcolor} >Press</button>
<h1 style={{visibility:hide}}>Button Clicked</h1>
</div>
           
           
        </div>
    )
}

export default Page
