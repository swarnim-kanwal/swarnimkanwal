export function Footer() {
  return (
    <footer className="relative border-t border-accent/15 py-8 sm:py-10 px-4 sm:px-6 mt-8 sm:mt-12">
      {/* Top accent gradient line */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.8), transparent)",
        }}
      />

      <div className="max-w-275 mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#B8B0CC]">
          Designed &amp; built by{" "}
          <span className="text-accent font-medium">Swarnim Kanwal</span> · 2026
        </p>
        <p className="font-mono text-xs text-[#8A8A93]">
          Made with code, coffee, and a little AI.
        </p>
      </div>
    </footer>
  );
}
