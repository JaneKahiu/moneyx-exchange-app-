function CurrencyInput({
  label,
  subtitle,
  value,
  onChange,
  currency = 'USD',
  readOnly = false,
}) {
  return (
    <div className="space-y-2">
      {/* Label */}
      <div className="flex items-center justify-between">
        <h3 className="text-white dark:text-gray-900 font-semibold text-lg">{label}</h3>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-600 text-sm">{subtitle}</p>
      )}

      {/* Input Container */}
      <div className="relative bg-[#0d0d0d] dark:bg-gray-50 rounded-xl p-6 focus-within:ring-2 focus-within:ring-emerald-500 dark:focus-within:ring-emerald-400 transition-all duration-200 border border-[#2a2a2a] dark:border-gray-300">
        <div className="flex items-center justify-between gap-4">
          {/* Amount Input */}
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="0.00"
            readOnly={readOnly}
            className="flex-1 bg-transparent text-white dark:text-gray-900 text-4xl font-bold outline-none placeholder:text-gray-600 dark:placeholder:text-gray-400"
          />

          {/* Currency Badge */}
          <div className="px-3 py-1 bg-[#262626] dark:bg-gray-200 rounded-md text-gray-400 dark:text-gray-700 text-sm font-medium">
            {currency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyInput;
