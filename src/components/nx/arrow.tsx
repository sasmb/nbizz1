export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`nx-arrow h-[14px] w-[16px] ${className}`} viewBox="0 0 16 14" fill="none" aria-hidden>
      <path d="M0 7h14M8.5 1.5 14 7l-5.5 5.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
