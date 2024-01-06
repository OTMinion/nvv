"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

interface CounterProps {
  id: string;
  targetNumber: number;
  label: string;
  speed: number;
}

const Counter = ({ id, targetNumber, label, speed }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const incrementCount = useCallback(() => {
    if (count < targetNumber) {
      const timer = setTimeout(() => {
        setCount((c) => c + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [count, targetNumber, speed]);

  const handleScroll = useCallback(() => {
    const element = document.getElementById(id);
    if (element && window.scrollY + window.innerHeight >= element.offsetTop) {
      if (!hasStarted) {
        setHasStarted(true);
        incrementCount();
      }
    }
  }, [id, hasStarted, incrementCount]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (hasStarted) {
      incrementCount();
    }
  }, [hasStarted, incrementCount]);

  return (
    <div id={id} className=" text-customBlue  text-5xl uppercase font-bold">
      {count} + <br />
      <span className="text-gray-500 text-2xl font-normal">{label}</span>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between my-24">
      <div className="flex flex-col lg:w-[65%] px-4 lg:px-32 space-y-5 ">
        <h1 className="text-5xl font-bold">
          We are the leader in <br />
          <span className="text-customBlue">industrial services</span>
        </h1>

        <p className="text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni exercitationem nam quibusdam maiores
          iste molestiae qui repellat magnam excepturi eius?
        </p>
        <p className="text-customBlue underline">About Us</p>

        <div className="flex flex-col lg:flex-row gap-10 py-12 text-center lg:text-start justify-between">
          <Counter id="projects" targetNumber={186} label="projects" speed={15} />
          <Counter id="years" targetNumber={20} label="years" speed={100} />
          <Counter id="dollars" targetNumber={200} label="employees" speed={12} />
        </div>
      </div>

      {/* Right content with image and number */}
      <div className="relative  lg:w-1/4 mx-4 lg:mr-32 h-[28rem] ">
        <Image src="/images/warehouse.jpg" alt="Background" layout="fill" objectFit="cover" />

        {/* White rectangle with transparent number */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white w-[90%] h-[90%] flex justify-center items-center relative">
            <div className="absolute inset-0 flex justify-start items-end">
              <span
                className="text-[7rem] font-bold text-transparent bg-clip-text bg-center bg-cover pl-5 pb-6"
                style={{ backgroundImage: "url(/images/warehouse.jpg)" }}
              >
                20 +
                <br />
                <p className="text-2xl">Years of experience</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
