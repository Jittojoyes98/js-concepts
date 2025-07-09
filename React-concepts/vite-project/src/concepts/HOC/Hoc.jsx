import React from "react";
import { useState } from "react";

function Hoc(OrginalComponent){
    
    function UpdatedHoc(){
        const [count,setCount]=useState(10)
        const handleIncrease=()=>{
            setCount(count*2)
        }
        return <OrginalComponent handleIncrease={handleIncrease} count={count}/>
    }
    return UpdatedHoc;
}
export default Hoc;