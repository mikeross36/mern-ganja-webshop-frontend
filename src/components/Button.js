const Button = ({ className, type, text }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;
