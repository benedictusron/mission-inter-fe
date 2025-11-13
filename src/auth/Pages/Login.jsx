import Forms from '../components/Forms.jsx'
import Header from '../../layouts/Header.jsx'
function Login() {
  return (
    <>
      <Header />
      <div className='border-2 mx-5 my-12 p-9 border-slate-100 rounded-lg bg-light-primary md:my-16 md:w-[590px] md:mx-auto shadow-sm'>
       <div className="text-center items-center mb-5 md:mb-9">
            <h3 className="text-[32px] font-semibold text-black-primary tracking-tight">Masuk ke Akun</h3>
            <p className="text-base tracking-[0.2px] text-black-secondary">Yuk, lanjutin belajarmu di videobelajar.</p>
        </div> 
        <Forms/>
      </div>
    
    </>

  )
}

export default Login