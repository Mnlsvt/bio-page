"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

import "../globals.css";

export default function HomePage() {
    

    return (
        <div className='bg-slate-950'>
            <a href="/"><button className="outline outline-1 outline-white rounded-2xl h-10 w-10 text-white absolute top-5 left-5 hover:text-blue-500 text-4xl">⇦</button></a>
            <h1 className="text-white flex justify-center items-center h-screen font-bold text-2xl">
                This page is not updated '<span className="text-teal-300">yet</span>'.
            </h1>
        </div>
    );}