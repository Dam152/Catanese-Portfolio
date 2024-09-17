import React from "react";
import Card from "./Card";

export default function About() {
  return (
    <section
      id="about"
      className=" w-screen flex flex-col items-center gap-9 p-20 max-md:py-10 max-sm:p-10 max-md:items-start max-sm:gap-6 main-container-xl"
    >
      <h1 className="text-5xl font-bold max-sm:text-3xl">About</h1>
      <p className=" w-3/4 text-center text-fontSubHero max-lg:w-full max-sm:text-sm max-md:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident
      </p>
      <div className="flex flex-wrap justify-center gap-20 max-sm:gap-10 max-sm:justify-start mt-10">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
}
