const Logo = ({ size = 'lg', dark = false }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJTke_IQzPBnZUYc-yMUL4nYgefpj-0yYaOjT3b22hBz62Sqsw-BX4x8g&s=10"
      alt="Green Health Agro Foods"
      className={`${sizes[size] || sizes.md} w-auto object-contain ${dark ? 'brightness-0 invert' : ''}`}
    />

  );
};

export default Logo;
