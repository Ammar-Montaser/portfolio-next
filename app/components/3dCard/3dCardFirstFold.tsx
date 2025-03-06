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
      <div className=" ">
        <div className="phone-con">
          <div className="phone">
            <div className="buttons">
              <div className="left">
                <div className="button"></div>
                <div className="button"></div>
                <div className="button"></div>
              </div>
              <div className="right">
                <div className="button"></div>
              </div>
            </div>
            <div className="screen-container">
              <div className="bg">
                <div className="deep-purple">
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                </div>
                <div className="gold">
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                </div>
                <div className="space-black">
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                </div>
                <div className="silver">
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                  <div className="section">
                    <div className="glow"></div>
                  </div>
                </div>
                <div className="random canvas">
                  <div className="shapes">
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                    <div className="shape"></div>
                  </div>
                </div>
              </div>
              {/* <div className="notch-container ">
                <div className="notch">
                  <div className="content">
                    <div className="left">
                      <div className="tile"></div>
                      <div className="text"></div>
                    </div>
                    <div className="right"></div>
                    <div className="bar">
                      <div className="duration"></div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="notch-blur"></div>
              <div className="screen">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
}

export default ThreeDCardDemo;
