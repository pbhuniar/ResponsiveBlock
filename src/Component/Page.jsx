import React, { useState } from 'react'

const Page = () => {
    const [color, setcolor] = useState("red")
    const [hide, display] = useState("hidden")
    const [count, countup] = useState(0)



    const chngcolor = () => {
        countup(count + 1)

        if (color === "red") {
            setcolor("green")
            display("")
        }
        else {
            setcolor("red")
        }

    }

    const block1 = {
        height: "50%",
        width: "50%",
        background: color,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }

    return (
        <div>
            <div style={block1}>
            </div>
            <br />
            <br />
            <div style={{ position: "absolute", top: "90%", left: "50%", transform: "translate(-50%,-50%)" }}>
                <button style={{ height: "3rem", width: "100%", background: "red", color: "white", border: "none" }} onClick={chngcolor} >Press</button>
                <p style={{ visibility: hide, marginBottom: "0px" }}>Button Clicked</p>
                <p style={{ visibility: hide, textAlign: "center" }}>{count} times</p>
            </div>


        </div>
    )
}

export default Page
