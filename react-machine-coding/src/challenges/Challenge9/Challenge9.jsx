import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

// const Challenge9 = ({heading}) => {
//   const [refIndex,setRefIndex]=useState(0)
//   const [digit,setDigit]=useState("1")

//   const inputRefs=[...Array(4)].map((_,id)=>{
//     const ref=useRef()
//     return ref;
//   })
  

//   useEffect(() => {
//     if(inputRefs[refIndex].current){
//       inputRefs[refIndex].current.focus()
//     }
//   }, [refIndex]);
  
//   const handleChange=(e)=>{
//     console.log(inputRefs[refIndex].current.value,"Values");
//     if(!e.target.value){
//       setRefIndex((prev)=>{
//         if(prev-1>=0){
//           return prev-1
//         }
//         return prev;
//       })
//     }else{
//       setRefIndex((prev)=>{
//         if(prev+1<=3){
//           return prev+1
//         }
//         return prev;
//       })
//     }
//   }

//   return <div >
//     <h1>{heading}</h1>
//     {
//       inputRefs.map((ref,id)=>{
//         return (
//           <input type="text" maxLength={1} ref={ref} key={id} onChange={(e)=>handleChange(e,id)}/>
//         )
//       })
//     }
//   </div>;
// };

const Challenge9 = ({heading}) => {
  const otpLen=4;
  const [otp,setOtp]=useState([...Array(otpLen)].fill(""))
  const inputRefs=useRef([])
  
  const handleSubmit=()=>{
  }
  const handleKeyDown=(e,index)=>{
    const isBackspace=e.key === "Backspace" ? true:false;
    if(isBackspace && !otp[index] && index>0){
      inputRefs.current[index-1].focus()
    }
  }
  const handleChange=(e,index)=>{
    const value=e.target.value;
    if(isNaN(value)) return
    const newOtp=[...otp]
    newOtp[index]=value.substring(value.length-1);
    
    setOtp(newOtp)
    if(value && index+1<otpLen){
      inputRefs.current[index+1].focus()
    }
  }
  
  useEffect(()=>{
    inputRefs.current[0].focus();
  },[])
  return (
    <div>
      <h1>{heading}</h1>
      {
        otp.map((val,index)=>{
          return (
            <input type="text" value={val} key={index} ref={(ref)=>inputRefs.current[index]=ref}
              onChange={(e)=>handleChange(e,index)}
              onKeyDown={(e)=>handleKeyDown(e,index)}
            />
          )
        })
      }
    </div>
  )
}

export default Challenge9;
