"use client"

import dynamic from 'next/dynamic';
import React from 'react'

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

export default function Cursor() {
  return (
    <AnimatedCursor
        innerSize={24}
        innerScale={0}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        outerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        trailingSpeed={16}
        clickables={["a", "button", "div.bg-image", "h1", "img"]}
      />
  )
}
