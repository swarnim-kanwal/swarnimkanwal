export function Footer() {
  return (
    <footer className="border-t border-[#1F1F23] dark:border-[#1F1F23] py-8 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93]">
          Designed &amp; built by Swarnim Kanwal · 2026
        </p>
        <p className="text-sm text-[#8A8A93] dark:text-[#8A8A93] font-mono text-xs">
          Made with code, coffee, and a little AI.
        </p>
      </div>
    </footer>
  );
}
