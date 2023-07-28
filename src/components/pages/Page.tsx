import { useParams } from "react-router-dom"
import { PagesType } from "../../dataState/dataState"
import { Error404 } from "./Error404"
import { useState } from "react"
import { Content } from "./Content"


type PropsType = {
    pages: Array<PagesType>
}


export const Page = (props: PropsType) => {
    let params = useParams()
      console.log(params)
    const element = Number(params.id)

    // return (
            
            // element <= props.pages.length ?
            // <Content heading = {props.pages[element].heading} about = {props.pages[element].about} />
            // : <Error404/>

           return  props.pages[element] ? <Content heading = {props.pages[element].heading} about = {props.pages[element].about} /> : <Error404 />
            
            
    // )

}





//--------------------------------------------------------------------------------------------------

// return (
            
//     element <= props.pages.length ?
//     <div>
//     <div>{props.pages[element].heading} </div>
//     <div>{props.pages[element].about} </div>
//     </div>
//     : <Error404/>
    


// )
