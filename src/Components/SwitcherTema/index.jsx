import {  BsMoonFill } from "react-icons/bs";
import { BsMoonStarsFill } from "react-icons/bs";


const ToogleDark = ({tema})=>{
 const claro = < BsMoonStarsFill className="BtnTema"/>
 const oscuro = <BsMoonFill className="BtnTema"/>

 return <>{tema ? oscuro : claro}</>
}

export default ToogleDark
