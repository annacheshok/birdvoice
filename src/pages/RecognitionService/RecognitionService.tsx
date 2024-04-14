import { Button, Header } from "../../components";
import { Record } from "../../components/Record";
import { RecordPart } from "../../components/RecordPart";
import play from '../../shared/assets/play.png';
import birdSecond from '../../shared/assets/bird-2.png';
import historyFirst from '../../shared/assets/history-1.png';
import historySecond from '../../shared/assets/history-2.png';
import recordFirst from '../../shared/assets/record-1.png';
import recordSecond from '../../shared/assets/record-2.png';
import recordThird from '../../shared/assets/record-3.png';
import recordForth from '../../shared/assets/record-4.png';
import recordFifth from '../../shared/assets/record-5.png';

const RecognitionService = () => {
    return (
      <>
        <Header src="dark" />
         <section className="container pt-[64px] pb-[64px] bg-no-repeat bg-right" style={{ backgroundImage: `url(${birdSecond})` }}>
            <div className="title font-medium text-[32px] mb-[32px] text-[#236b71]">Сервис распознования</div>
            <form className="uploads w-full max-w-[613px] bg-[#ded8bc] rounded-3xl p-[22px] pb-[18px] shadow-[4px_4px_16px_0_rgba(46,42,26,0.2)]">
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
                <Button title='Начать распознование' type='button' outlined className='!text-[#236b71] hover:!text-white'/>
              </div>
            </form>       
          </section>
          <section className="container">
            <div className="records grid gap-6 grid-cols-3 pb-[64px]">
              <RecordPart src={recordFirst} name='Название птицы' time='00:05 - 00:13' />
              <RecordPart src={recordSecond} name='Название птицы' time='00:05 - 00:13'/>
              <RecordPart src={recordThird} name='Название птицы' time='00:05 - 00:13'/>
              <RecordPart src={recordForth} name='Название птицы' time='00:05 - 00:13'/>
              <RecordPart src={recordFifth} name='Название птицы' time='00:05 - 00:13'/>
            </div>
          </section>
          <section className="container">
            <div className="title font-medium text-[32px] mb-[16px] text-[#236b71]">Предыдущие записи</div>
            <div className="records grid gap-6 grid-cols-3 pb-[104px]">
              <Record src={historyFirst} name='sdfsdfsd-sdf--sdf--sdf--sdf--sdf-fsdfsdf.mp3' />
              <Record src={historySecond} name='sdfsdf-sdf-sdfsdf.mp3' />
              <Record src={historySecond} name='sdfsdf-sdf-sdfsdf.mp3' />
              <Record src={historySecond} name='sdfsdf-sdf-sdfsdf.mp3' />
              <Record src={historyFirst} name='sdfsd.mp3' />
            </div>
          </section>
      </> 
  )
}

export default RecognitionService;