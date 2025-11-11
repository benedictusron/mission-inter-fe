
const Button = ({
  children,
  onClick,
  variant = "primary",
  style = "hero",
  size = "md",
  className = "",
}) => {
  const baseStyles = 
  "w-[280px] text-sm md:text-base font-bold  px-1 py-2.5 rounded-[10px] sm:w-[372px]";
  
  const styles = {
    hero: "w-[280px] text-sm md:text-base font-bold  px-1 py-2.5 rounded-[10px] sm:w-[372px] ",
    cta: "px-5 mt-4 w-full md:w-[133px] sm:absolute text-sm md:text-base sm:end-2 sm:bottom-2 font-bold  py-2.5 rounded-[10px] ",
  };

  const variants = {
    primary: "bg-primary text-light-primary hover:bg-primary-400",
    secondary: "bg-secondary text-light-primary hover:bg-secondary-hover",
  };

  return (
    <button 
      onClick={onClick } 
      className={`${baseStyles} ${variants[variant]} ${styles[style]}`}
    >
     {children} 
    </button>
  )
}



export default Button