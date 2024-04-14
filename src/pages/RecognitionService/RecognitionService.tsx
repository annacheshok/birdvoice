import { Button, Header } from "../../components";
import play from '../../shared/assets/play.png';
import birdSecond from '../../shared/assets/bird-2.png';

const RecognitionService = () => {
    return (
      <>
        <Header src="dark" />
         <section className="container pt-[64px] pb-[64px] bg-no-repeat bg-right-bottom" style={{ backgroundImage: `url(${birdSecond})` }}>
            <div className="title font-medium text-[32px] mb-[32px] text-[#236b71]">Сервис распознования</div>
            <form className="uploads w-full max-w-[613px] bg-[#ded8bc] rounded-3xl p-[22px] pb-[18px]">
              <label className="block bg-[#216f75] opacity-40 h-[240px] rounded-[18px] mb-[-27px] text-xl font-medium text-[#eef0f5]">
                <span className="flex justify-center items-center h-full cursor-pointer">Перетащите файл сюда</span>
                <input className="hidden" type="file" id="img" accept="audio/*" />
              </label>
              <span className="block w-full h-[27px] bg-[#619296] rounded-[16px]"></span>
              <div className="flex items-center mt-[4px] text-[#1b1810]">
                <img className="mr-[6px]" src={play} alt="" />
                <span>00:00:00</span>
              </div>
              <div className="pt-[18px] text-center">
                <Button title='Загрузить файл' type='submit' className='mr-6' />
                <Button title='Начать распознование' type='button' outlined className='text-[#236b71] hover:text-[#fff]'/>
              </div>
            </form>
          </section>
      </> 
  )
}

export default RecognitionService;