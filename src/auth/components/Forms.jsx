import { FcGoogle } from "react-icons/fc";
import InputField from './InputField';
import PasswordField from './PasswordField';
import Button from './Button';
import { useNavigate, useLocation } from 'react-router-dom';
import SelectField from "./SelectField";
import PhoneField from "./PhoneField";

function Forms() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        navigate("/");
    }
    const handletoRegister = () => {
        navigate("/register");
    }
    const handletoLogin = () => {
        navigate("/login");
    }

    const isAuth = location.pathname === '/register';
  return (
        <div className=" items-center content-center ">
            <InputField label="Nama Lengkap" name="nama" type="text" required placeholder="Masukkan Nama Lengkap"/>
            <InputField label="E-Mail" name="email" type="email" required placeholder="Masukkan Email"/>
            {isAuth && 
            <SelectField label="Jenis Kelamin" name="jenisKelamin" required placeholder="Pilih Jenis Kelamin"/>
            }
            {isAuth &&
            <PhoneField label="Nomor Handphone" name="nomorHandphone" type="number" required/>
            }
            <PasswordField label="Kata Sandi" name="Password" required placeholder="Masukkan Password"/>
            {isAuth && 
            <PasswordField label="Konfirmasi Kata Sandi" name="konfirmasiPassword" required placeholder="Masukkan Ulang Password"/>
            }
            
            <h5 className="text-right text-black-secondary  hover:text-black-primary pb-1"><a href="">Lupa Password?</a></h5>
            <Button variant="primary" layouts="masuk" 
            onClick={isAuth ? handletoLogin : handleLogin}  >
                {isAuth ? "Daftar" : "Masuk"}
                </Button>

            <Button variant="secondary" layouts="daftar" 
            onClick={isAuth ? handletoLogin : handletoRegister} >
                {isAuth ? "Masuk" : "Daftar"}
                </Button>
            
            <div className="flex items-center">
                <div className="grow border-t-2 border-other-border my-2"></div>
                <span className="shrink mx-2 text-black-secondary"> atau </span>
                <div className="grow border-t-2 border-other-border my-2"></div>
            </div>
            <Button variant="google" layouts="google" className="flex items-center justify-center gap-2">
                <FcGoogle size={20} />
                {isAuth ? "Daftar dengan Google" : "Masuk dengan Google "}
                </Button>
        </div>


  )
}

export default Forms