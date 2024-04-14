import { Header } from "../../components";
import { Record } from "../../components/Record";
import historyFirst from '../../shared/assets/history-1.png';
import historySecond from '../../shared/assets/history-2.png';

const HistoryRecognition = () => {
    return <>
    <Header src="dark" />
    <section className="container pt-[93px] pb-[104px]">
      <div className="title font-medium text-5xl mb-[64px] text-[#236b71]">История распознования</div>
      <div className="records grid gap-6 grid-cols-3">
        <Record src={historyFirst} name='sdfsdfsd-sdf--sdf--sdf--sdf--sdf-fsdfsdf.mp3' />
        <Record src={historySecond} name='sdfsdf-sdf-sdfsdf.mp3' />
        <Record src={historySecond} name='sdfsdf-sdf-sdfsdf.mp3' />
        <Record src={historySecond} name='sdfsdf-sdf-sdfsdf.mp3' />
        <Record src={historyFirst} name='sdfsd.mp3' />
      </div>
    </section>
    </>
}

export default HistoryRecognition;