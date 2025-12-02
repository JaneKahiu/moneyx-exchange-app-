function CurrencyInput({
  label,
  subtitle,
  value,
  onChange,
  currency = 'USD',
  readOnly = false,
}) {
  return (
    <div className="space-y-3">
      {/* Label */}
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium text-base">{label}</h3>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-500 text-sm">{subtitle}</p>
      )}

      {/* Input Container */}
      <div className="relative bg-[#273142] rounded-lg p-4 focus-within:ring-1 focus-within:ring-gray-600 transition-all duration-200">
        <div className="flex items-center justify-between gap-4">
          {/* Amount Input */}
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="0.00"
            readOnly={readOnly}
            className="flex-1 bg-transparent text-white text-3xl font-semibold outline-none placeholder:text-gray-600"
          />

          {/* Currency Badge */}
          <div className="px-4 py-2 bg-[#3D4B5F] rounded text-gray-400 text-sm font-medium">
            {currency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyInput;
