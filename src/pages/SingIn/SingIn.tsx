import { useState } from "react";
import { Button, Header } from "../../components";
import fon from '../../shared/assets/fon-2.png';

const SignIn = () => {
  const [loginValue, setLoginValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleLoginChange = (e:any) => {
    setLoginValue(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPasswordValue(e.target.value);
  };
    return <>
      <Header src="light" className="absolute top-0 z-[90]" />
      <section className="h-[992px] flex items-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${fon})` }}>
        <div className="container relative z-50 flex items-center justify-end">
          <form className="flex w-[551px] flex-col text-center" action="">
            <div className="font-medium text-[40px] mb-[48px] text-[#236b71]">Вход</div>
            <input className="text-[24px] focus:outline-none placeholder:text-[#1b1810] bg-transparent mb-[48px] border-solid border-b-2 border-[#216f75]" type="text" name="Login" placeholder="Login" value={loginValue} onChange={handleLoginChange} required />
            <input className="text-[24px] focus:outline-none placeholder:text-[#1b1810] bg-transparent border-solid border-b-2 border-[#216f75]" type="password" name="Пароль" placeholder="Пароль" value={passwordValue} onChange={handlePasswordChange} required />
            <Button title='Войти' type='submit' className='text-[24px] py-[16px] px-[48px] w-fit mx-auto mb-[16px] mt-[48px]' />
            <div className='text-[18px] mb-[16px] text-[#1b1810]'>Забыли пароль</div>
            <div className='text-[18px] mb-[16px] text-[#1b1810]'>Зарегистироваться</div>
          </form>
        </div>
      </section>
    </>
}

export default SignIn;