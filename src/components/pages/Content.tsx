import React from "react";

type PropsType = {
    heading: string
    about: string
}


export const Content: React.FC <PropsType> = (props) => {
  return (
    <div>
    <div>{props.heading} </div>
    <div>{props.about} </div>
    </div>
  )
} 