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
        <h3 className="text-[#f9fafb] font-medium text-base">{label}</h3>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-[#6b7280] text-sm">{subtitle}</p>
      )}

      {/* Input Container */}
      <div className="relative bg-[#1c1c1c] rounded-lg p-4 focus-within:ring-1 focus-within:ring-[#2a2a2a] transition-all duration-200 border border-[#2a2a2a]">
        <div className="flex items-center justify-between gap-4">
          {/* Amount Input */}
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="0.00"
            readOnly={readOnly}
            className="flex-1 bg-transparent text-[#ffffff] text-3xl font-semibold outline-none placeholder:text-[#6b7280]"
          />

          {/* Currency Badge */}
          <div className="px-4 py-2 bg-[#2a2a2a] rounded text-[#9ca3af] text-sm font-medium">
            {currency}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyInput;
