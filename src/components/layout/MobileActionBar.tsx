export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy/10 bg-white/95 p-3 backdrop-blur lg:hidden">
      <a
        href="#booking"
        className="flex-1 rounded-full bg-passport-red px-4 py-3 text-center text-sm font-heading font-semibold text-white shadow-md"
      >
        Reserve Your Flight
      </a>
      <button
        type="button"
        disabled
        title="Coming soon"
        className="flex-1 cursor-not-allowed rounded-full border border-navy/15 bg-cream-dark px-4 py-3 text-center text-sm font-heading font-semibold text-navy-light/70"
      >
        Quick Bite Ordering
      </button>
    </div>
  );
}
