"use client";
import ArrowRight from "@/assets/icons/ArrowRignt";
import styles from "./styles.module.scss";
import { FC } from "react";
import Radar from "../radar";

interface HeroProps {
  canvasImplementation: boolean;
}

const Hero: FC<HeroProps> = ({ canvasImplementation }) => {
  return (
    <section
      className={`h-[600px] flex justify-center items-center ${styles.section}`}
    >
      <div className="flex flex-col items-center justify-center gap-64">
        <div className="flex flex-col items-center justify-center text-center text-white max-w-[851px] gap-12">
          <h1 className="text-6xl font-extrabold">
            Seamless stablecoin deposits and payments for your fintech app
          </h1>
          <p className="text-xl text-[#ffffff] opacity-50 max-w-[703px]">
            Empower your customers with secure, non-custodial stablecoin
            deposits and payments using our easy-to-integrate wallet
            infrastructure.
          </p>
        </div>
        <div className="cta flex gap-[34px]">
          <button className="text-sm bg-bc-green-400 py-8 px-12 rounded-md text-black">
            Sign up now!
          </button>
          <button className="flex items-center gap-12 text-sm border border-[#FFFFFF33] py-8 px-12 rounded-md text-white bg-transparent">
            <p>Explore our API docs</p>
            <div className="h-10.5 w-10.5 rotate-0">
              <ArrowRight color="stroke-[#FFFFFF33]" />
            </div>
          </button>
        </div>
        {canvasImplementation && <Radar />}
      </div>
      {!canvasImplementation && (
        <>
          <div
            className={`absolute top-96 inset-0 w-full h-[800px] ${styles.checkerBackground}`}
          ></div>
          <div className={`${styles.beamer}`}></div>
        </>
      )}
    </section>
  );
};

export default Hero;
