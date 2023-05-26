const Button = ({ children, type, text }) => {
  return (
    <button
      type={type}
      className="md:text-base text-sm shadow-lg md:w-1/3 dark:text-white text-white  dark:bg-gradient-to-r from-blue-500 to-blue-600 bg-blue-950 mt-2 p-2 rounded hover:scale-110 ease-in duration-300"
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
