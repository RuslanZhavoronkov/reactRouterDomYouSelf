import React from "react";
import { useNavigate } from "react-router-dom";

type PropsType = {
  heading: string
  about: string
}


export const Content: React.FC<PropsType> = (props) => {
  const { heading, about } = props;

  const navigate = useNavigate()

  const onClickBackHandler = () => {
    navigate(-1);
  }

  const onClickBackMainHandler = () => {
    navigate('/Page/0');
  }

  return (
    <div>
      <div>{heading} </div>
      <div>{about} </div>

      <button onClick={onClickBackHandler}>back in history</button>
      <button onClick={onClickBackMainHandler}>back in main page</button>
    </div>
  )
} 