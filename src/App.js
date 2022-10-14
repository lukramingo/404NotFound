import React from "react";
import scarecrow from "./images/Scarecrow.png";

const App = () => {
  return (
    <>
      <navbar className="w-full h-[200px]">
        <h1 className="p-8 font-bold text-3xl">404 NOT FOUND</h1>
      </navbar>
      <section className="lg:flex lg:flex-row lg:justify-around flex flex-col justify-center items-center">
        <img className="lg:w-[700px] lg:h-[600px] w-[600px] h-[500px]" src={scarecrow} alt="scarecrow"/>
        <div className="flex flex-col">
          <div className="lg:my-4 my-2 font-mono ">
          <h1 className="lg:text-7xl lg:py-4 text-6xl mb-4">I have bad news</h1>
          <h1 className="lg:text-7xl lg:py-4 text-6xl">for you</h1>
          </div>
          <p className="font-mono text-slate-500 w-[250px] leading-loose my-4">The Page you are looking for might be removed or is temporarily unavailable</p>
          <button className="p-8 bg-slate-800 text-white self-start lg:mt-14 mt-8">BACK TO HOMEPAGE</button>
        </div>
      </section>
      <footer className="text-center text-slate-700 lg:mt-[180px] mt-[50px]">
        <p>created by Lukramingo-devChallenges.io</p>
      </footer>
    </>
  );
}

export default App;
