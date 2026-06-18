"use client";

import dynamic from "next/dynamic";
import type { GISMapProps } from "@/components/GISMapInner";

const GISMapInner = dynamic(() => import("@/components/GISMapInner").then((module) => module.GISMapInner), {
  ssr: false,
  loading: () => (
    <div className="relative overflow-hidden rounded-[0.5rem] border border-white/10 bg-[#05101d] p-3 shadow-glow sm:p-4">
      <div className="relative z-10 h-[22rem] w-full animate-pulse rounded-[0.45rem] bg-white/[0.04] sm:h-[26rem] lg:h-[28rem]" />
    </div>
  )
});

export function GISMap(props: GISMapProps) {
  return <GISMapInner {...props} />;
}
