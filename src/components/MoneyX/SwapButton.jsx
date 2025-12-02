function SwapButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-12 h-12 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
      aria-label="Swap currencies"
    >
      {/* Up/Down Arrows Icon */}
      <svg
        className="w-5 h-5 text-white transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
        />
      </svg>
    </button>
  );
}

export default SwapButton;
