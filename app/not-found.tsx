import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#0A0A0B] text-[#EDEDED]">
      <p className="font-mono text-xs text-[#3B82F6] tracking-widest uppercase mb-6">
        404
      </p>
      <h1 className="text-2xl sm:text-3xl font-semibold text-[#EDEDED] text-center mb-3 max-w-md leading-snug">
        This route is in a state I haven&apos;t handled yet.
      </h1>
      <p className="text-sm text-[#8A8A93] mb-10 font-mono">
        Probably a typo. Happens to the best of us.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-sm font-medium rounded-md transition-colors duration-200"
      >
        Go home
      </Link>
    </div>
  );
}
