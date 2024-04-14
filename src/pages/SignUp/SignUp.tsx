import { useState } from "react";
import { Button, Header } from "../../components";
import fonReg from '../../shared/assets/fon-1.png';

const SignUp = () => {
  return <>
      <Header src="light" className="absolute top-0 z-[90]" />
      <section className="h-[992px] flex items-center bg-no-repeat bg-cover relative" style={{ backgroundImage: `url(${fonReg})` }}>
        <div className="container relative z-50 flex items-center justify-end">
          <form className="flex w-[551px] flex-col text-center" action="">
            <div className="font-medium text-[40px] mb-[48px] text-white">Регистрация</div>
            <input className="text-[24px] focus:outline-none placeholder:text-white bg-transparent mb-[48px] border-solid border-b-2 border-[#eef0f5]" type="text" name="name" placeholder="Ваше имя" required />
            <input className="text-[24px] focus:outline-none placeholder:text-white bg-transparent mb-[48px] border-solid border-b-2 border-[#eef0f5]" type="text" name="surname" placeholder="Ваша фамилия" required />
            <input className="text-[24px] focus:outline-none placeholder:text-white bg-transparent mb-[48px] border-solid border-b-2 border-[#eef0f5]" type="email" name="email" placeholder="Ваш электронный адрес" required />
            <input className="text-[24px] focus:outline-none placeholder:text-white bg-transparent mb-[48px] border-solid border-b-2 border-[#eef0f5]" type="text" name="login" placeholder="Логин" required />
            <input className="text-[24px] focus:outline-none placeholder:text-white bg-transparent border-solid border-b-2 border-[#eef0f5]" type="password" name="Пароль" placeholder="Пароль" required />
            <Button title='Зарегистрироваться' type='submit' className='text-[24px] py-[16px] px-[32px] w-fit mx-auto mb-[16px] mt-[48px]' />
            <div className='text-[18px] mx-[58px] text-white'>Нажимая на кнопку, вы соглашаетесь с 
            <a className="underline" href=''> политикой обработки персональных данных</a></div>
          </form>
        </div>
      </section>
  </>
}

export default SignUp;