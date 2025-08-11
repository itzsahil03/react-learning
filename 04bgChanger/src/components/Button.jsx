import React from 'react'

function Button({colorGiven , color}){
    // const [color, setColor] = React.useState("grey")
    function addColor(){
        setColor(color)

    }
    return (
        <div className="flex flex-wrap justify-center p-2 gap-4 outline-none rounded-full" 
        style ={{backgroundColor: colorGiven}}>
            <button onClick={() => setColor("colorGiven")}>{colorGiven}</button>
        </div>
    )
}

export default Button
