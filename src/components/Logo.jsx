const Logo = ({ size = 'md', dark = false }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <img
      src="/logo.png"
      alt="Green Health Agro Foods"
      className={`${sizes[size] || sizes.md} w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`}
    />
  );
};

export default Logo;
