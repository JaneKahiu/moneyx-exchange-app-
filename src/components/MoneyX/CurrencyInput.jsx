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
        <h3 className="text-white font-semibold text-lg">{label}</h3>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-400 text-sm">{subtitle}</p>
      )}

      {/* Input Container */}
      <div className="relative bg-dark-lighter rounded-lg border border-gray-700 p-4 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all duration-200">
        <div className="flex items-center justify-between gap-4">
          {/* Amount Input */}
          <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="0.00"
            readOnly={readOnly}
            className="flex-1 bg-transparent text-white text-2xl font-semibold outline-none placeholder:text-gray-600"
          />

          {/* Currency Badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-card rounded-lg border border-gray-700">
            <span className="text-white font-medium">{currency}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyInput;
