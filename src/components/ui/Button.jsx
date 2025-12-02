function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className = '',
  type = 'button',
  fullWidth = false,
}) {
  const baseStyles =
    'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-primary hover:bg-primary-dark text-white focus:ring-primary disabled:hover:bg-primary',
    secondary:
      'bg-dark-card hover:bg-dark-hover text-white border border-gray-700 focus:ring-gray-600 disabled:hover:bg-dark-card',
    outline:
      'bg-transparent hover:bg-dark-lighter text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600 focus:ring-gray-600',
    danger:
      'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500 disabled:hover:bg-red-600',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
