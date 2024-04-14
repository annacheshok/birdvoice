import cn from 'clsx';
import { Button, Header } from "../../components";
import birdFirst from '../../shared/assets/bird-1.png';
import birdThird from '../../shared/assets/bird-3.png';
import birdFourth from '../../shared/assets/bird-4.png';
import birdFifth from '../../shared/assets/bird-5.png';
import { Cards, Features } from "./_ui";

const Main = () => {
    const styles = {
        listItem: cn('flex items-center'),
        listItemText: cn('mb-4 last:mb-0 font-light text-[18px] text-[#1B1810]'),
        icon: cn('w-4 h-4 mr-[4px] bg-[#216F75] rounded-[50%]'),
    };
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
                className="container pt-[64px] pb-[80px] flex items-center"
            >
                <Cards />
                <div className='ml-6 max-w-[296px]'>
                    <p className='font-medium text-[26px] text-[#216F75] mb-4'>
                        О центре
                    </p>
                    <p className='font-light text-[18px] text-[#1B1810]'>
                        Информационно-аналитический центр автономного непрерывного мониторинга создан в рамках государственной программы Научной и инновационной деятельности Национальной академии наук Беларуси с целью разработки технологии автоматизированного распознавания голосовых сигналов животных для непрерывного мониторинга редких видов и состояния биоразнообразия в лесных экосистемах
                    </p>
                </div>
            </section>
            <section
                className="bg-cover bg-center min-h-screen"
                style={{ backgroundImage: `url(${birdThird})` }}
            >
                <div className="container pt-[160px] pb-[165px]">
                    <p className="font-medium text-[26px] text-[#216F75]">Наша цель</p>
                    <p className="font-light text-[18px] text-[#1B1810] max-w-[436px] mt-4">Обеспечение автоматизированного распознавания голосовых сигналов птиц для непрерывного мониторинга видового разнообразия животных в различных экосистемах в режиме круглосуточного и круглосезонного наблюдения с 2021 по 2025 годы</p>
                </div>
            </section>
            <Features />
            <section className="container flex justify-between items-center">
                <div>
                    <p className="font-medium text-[26px] text-[#216F75] mb-8">Как использовать?</p>
                    <ul>
                        <li className={styles.listItem}>
                            <div className={styles.icon}>
                            </div>
                            <p className={styles.listItemText}>Войдите в свой аккаунт или зарегистрируйтесь</p>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.icon}>
                            </div>
                            <p className={styles.listItemText}>Загрузите аудиофайл с вашего устройства</p>
                        </li>
                        <li className={styles.listItem}>
                            <div className={styles.icon}>
                            </div>
                            <p className={styles.listItemText}>Запустите сервис распознавания и дождитесь результата</p>
                        </li>
                    </ul>
                </div>
                <img src={birdFourth} alt='' />
            </section>
            <section className="flex justify-between items-center pr-[172px]">
                <img src={birdFifth} alt='' />
                <div>
                    <p className="font-medium text-[26px] text-[#216F75] mb-4">Скачайте приложение</p>
                    <p className="font-light text-[18px] text-[#1B1810] mb-10">Откройте для себя удивительное многообразие голосов пернатых и погрузитесь в увлекательный мир природы прямо сейчас!</p>
                    <div className='flex mt-10'>
                        <Button title='IOS' type='button' className='mr-3' />
                        <Button title='Android' type='button' />
                    </div>
                </div>
            </section>
            <section className="container mt-[42px] mb-16">
                <div className="max-w-[936px] flex items-center justify-between rounded-[40px] bg-[#DED8BC] py-10 px-20">
                    <div className='flex flex-col'>
                        <p className="font-medium text-[26px] text-[#216F75] mb-2">Есть идеи?</p>
                        <p className="font-medium text-[32px] text-[#216F75]">Свяжись с нами!</p>
                    </div>
                    <Button title='Написать' type='button' className={'h-[45px]'} />
                </div>
            </section>
        </>

    );
};

export default Main;
