import Forms from '../components/Forms.jsx'
import Header from '../../layouts/Header.jsx'
function Login() {
  return (
    <>
      <Header />
      <div className='border-2 mx-5 my-7 p-9 border-slate-100  bg-light-primary md:w-[600px] md:mx-auto md:mt-36 '>
       <div className="text-center items-center">
            <h3 className="text-[32px] font-semibold text-black-primary tracking-tight">Masuk ke Akun</h3>
            <span className="text-[16px]tracking-[0.2px] text-black-secondary">Yuk, lanjutin belajarmu di
                videobelajar.</span>
        </div> 
        <Forms/>
      </div>
    
    </>

  )
}

export default Login