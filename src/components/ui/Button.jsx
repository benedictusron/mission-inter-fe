
const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const baseStyles = 
  "w-[280px] text-sm md:text-base font-bold  px-1 py-2.5 rounded-[10px] sm:w-[372px]";
  
  

  const variants = {
    primary: "bg-primary text-light-primary hover:bg-primary-400",
    secondary: "bg-secondary text-light-secondary hover:bg-secondary-400",
  };

  return (
    <button 
      onClick={onClick } 
      className={`${baseStyles} ${variants[variant]}`}
    >
     {children} 
    </button>
  )
}



export default Button