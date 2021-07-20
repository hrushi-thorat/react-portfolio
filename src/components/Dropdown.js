import styled from "styled-components";
import { useState } from "react";
import {BiMenuAltLeft} from "react-icons/bi"
import { motion } from "framer-motion";

const Dropdown=({javascript,SetJavascript,front,Setfront,reactp,Setreactp,html,Sethtml})=>{
    const [open,setOpen]=useState(false)
    const toggle = () => {
        setOpen(!open);
        console.log(open);
      };
const JsSet=()=>{
    SetJavascript(!javascript)
    Setfront(false)
    Setreactp(false)
    Sethtml(false)
}
const FrontSet=()=>{
    Setfront(!front)
    SetJavascript(false)
    Setreactp(false)
    Sethtml(false)
}
const ReactSets=()=>{
    SetJavascript(false)
    Setfront(false)
    Setreactp(!reactp)
    Sethtml(false)
}
const HtmlSet=()=>{
    SetJavascript(false)
    Setfront(false)
    Setreactp(false)
    Sethtml(!html)
}

    return(
        <div>
<Menu>
 <BiMenuAltLeft size="40px" onClick={toggle} />
</Menu>
{open &&
        <Drop>
            
            <ul>
                <li onClick={JsSet}>
                    Javascript
                </li>
                <li onClick={HtmlSet}>
                    Html,Css
                </li>
                <li onClick={ReactSets}>
                    React
                </li>
        <li onClick={FrontSet}>
            FrontEnd Mentor
        </li>
            </ul>
        </Drop>
        }
        </div>
    )
}

const Drop=styled(motion.div)`
position: absolute;
background: gray;
width:100%;
left: 0;
top:10vh;
padding-top: 0;
font-weight: bolder;
font-size: 1.3rem;
margin-bottom: 3rem;
/* display: none; */
ul{
    color:white;
    padding: 0.6rem 6rem 0rem 6rem;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

}
li{
    cursor: pointer;
    margin-bottom: 1rem;
}
`
const Menu=styled(motion.div)`
position: absolute;
top:10vh;
left:0;
z-index: 3;
cursor: pointer;
`
export default Dropdown