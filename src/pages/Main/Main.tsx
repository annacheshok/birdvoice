import { Button, Header } from "../../components";
import birdFirst from '../../shared/assets/bird-1.png';

const Main = () => {
    return (
        <>
            <section
                className="bg-cover bg-center min-h-screen"
                style={{ backgroundImage: `url(${birdFirst})` }}
            >
                <Header />
                <div className="container pb-[334px]">
                    <h1 className="font-medium text-[32px] text-white mt-[163px] max-w-[690px]">Информационно-аналитический центр непрерывного автоматизированного мониторинга редких, исчезающих и индикаторных видов птиц</h1>
                    <div className="flex mt-[69px]">
                        <Button title='Начать распознавание' type='button' className='mr-6' />
                        <Button title='Скачать приложение' type='button' outlined />
                    </div>
                </div>
            </section>
            <section
                className="container pt-[64px] pb-[80px]"
            >
                <h1 className="font-medium text-[32px] text-white mt-[163px] max-w-[690px]">Информационно-аналитический центр непрерывного автоматизированного мониторинга редких, исчезающих и индикаторных видов птиц</h1>
                <div className="flex mt-[69px]">
                    <Button title='Начать распознавание' type='button' className='mr-6' />
                    <Button title='Скачать приложение' type='button' outlined />
                </div>
            </section>
        </>

    );
};

export default Main;
