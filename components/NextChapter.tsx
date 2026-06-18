import { AnimatedSection } from "@/components/AnimatedSection";

export function NextChapter() {
  return (
    <AnimatedSection id="next-chapter" className="max-w-none px-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[0.5rem] border border-white/10 bg-snow text-ink">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.32),transparent_28rem),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.28),transparent_24rem)]" />
          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-700">Next chapter</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-normal sm:text-5xl lg:text-6xl">
                Next Stop: Bhubaneswar
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Beginning my MBA journey at XIMB and looking forward to combining technology, leadership, and business.
              </p>
            </div>
            <div className="grid content-end gap-3">
              <div className="rounded-[0.5rem] border border-ink/10 bg-white/55 p-5">
                <p className="text-sm text-slate-600">From</p>
                <p className="mt-2 text-2xl font-semibold">IIT Madras</p>
              </div>
              <div className="rounded-[0.5rem] border border-ink/10 bg-white/55 p-5">
                <p className="text-sm text-slate-600">To</p>
                <p className="mt-2 text-2xl font-semibold">XIMB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
