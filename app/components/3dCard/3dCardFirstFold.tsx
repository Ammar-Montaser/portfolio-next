"use client";

import React from "react";
import { CardContainer } from "./3dCard";
import { twMerge } from "tailwind-merge";
import "./iphone.css";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function ThreeDCardDemo(props: CardProps) {
  return (
    <CardContainer className={twMerge("inter-var", props.className)}>
      <div className="wrapper">
        <div className="device h-[700px] w-[340px] max-md:h-[500px] max-md:w-[230px]">
          <div className="ringer-switch"></div>
          <div className="volume plus"></div>
          <div className="volume minus"></div>
          <div className="side-button"></div>
          <div className="display">
            <div className="speaker"></div>
            <div className="camera"></div>
            <div className="notch w-[180px] h-[30px] max-md:w-[100px] max-md:h-[20px]">
              <span></span>
              <span></span>
            </div>
            {/* <div className="icons-top">
              <div className="cell">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="wifi">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="battery">
                <span></span>
              </div>
            </div> */}
            {/* Accepts children to display dynamic content */}
            <div className="screen-content ">{props.children}</div>
            <div className="home-bar"></div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default ThreeDCardDemo;
