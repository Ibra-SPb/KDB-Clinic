import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Service } from "./Type/type";

const OneService = ({ oneService }: { oneService: Service }) => {
  return (
    <div>
      <div>{oneService.title}</div>
      <div>{oneService.body}</div>
      <div>
        <img src={oneService.img}></img>
      </div>
      <div>{oneService.price}</div>
    </div>
  );
};

export default OneService;
