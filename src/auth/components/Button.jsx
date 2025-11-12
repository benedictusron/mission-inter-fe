import { FcGoogle } from "react-icons/fc";
const Button = ({
    children,
    onClick,
    variant = "primary",
    layout = "masuk",
    className = "",
    ...props
}) => {
    const layouts = {
        masuk: "w-full rounded-[10px]  py-3 mb-4 mt-6  block text-center",
        daftar: "bg-primary-100 w-full rounded-[10px] text-primary py-3 mb-6",
        google: "py-1 font-bold rounded-[10px] items-center justify-center gap-2",
    };

   

    const variants = {
        primary: "bg-primary text-light-primary hover:bg-primary-400",
        secondary: "bg-primary-500 text-primary hover:bg-primary-100",
        google: "bg-light-primary border border-other-border  text-black-secondary hover:text-black-primary hover:bg-shadow-light-primary hover:border-black-secondary",
    };

    return (
        <button
            onClick={onClick}
            className={` ${variants[variant]} ${layouts[layout]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}



export default Button