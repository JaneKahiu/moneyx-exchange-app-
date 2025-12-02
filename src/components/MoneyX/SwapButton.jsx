function SwapButton({ onClick }) {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={onClick}
        className="relative z-10 -my-6 w-12 h-12 bg-primary hover:bg-primary-dark rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hover:rotate-180 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg group"
        aria-label="Swap currencies"
      >
        {/* Up/Down Arrows Icon */}
        <svg
          className="w-6 h-6 text-white transition-transform duration-200"
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
    </div>
  );
}

export default SwapButton;
