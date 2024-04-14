import cn from 'clsx'
import logoLight from '../../shared/assets/logo-light.png';
import iconFacebook from '../../shared/assets/icon-facebook.png';
import iconLinkedin from '../../shared/assets/icon-linkedin.png';
import iconTelegram from '../../shared/assets/icon-telegram.png';
import { ENavigation } from '../../shared/lib/constants';

const Footer = () => {
    const styles = {
        listItem: cn('mb-4 last:mb-0 font-normal text-[16px] text-white hover:text-[#DED8BC]'),
        icon: cn('w-8 h-8 mr-[26px] last:mr-0'),
    };

    return (
        <footer className="bg-[#216f75]">
            <div className="container pt-16 pb-8">
                <div className="flex justify-between border-y border-[#DED8BC] pt-4 pb-8">
                    <img src={logoLight} alt='' className='w-[103px] h-[32px]' />
                    <ul className='flex flex-col ml-[100px]'>
                        <li className='mb-4 font-medium text-[16px] text-white'>
                            Наши проекты:
                        </li>
                        <li className={styles.listItem}>
                            <a href=''>corpus.by</a>
                        </li>
                        <li className={styles.listItem}>
                            <a href=''>krokam.com</a>
                        </li>
                    </ul>
                    <ul className='flex flex-col mr-[70px]'>
                        {Object.values(ENavigation).map((item, index) => {
                            return (
                                <li key={crypto.randomUUID()} className={styles.listItem}>
                                    <a href=''>{item}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='pt-4 flex'>
                    <div className='ml-[280px]'>
                        <ul className='flex flex-col'>
                            <li className={styles.listItem}>
                                <a href=''>+375 29 255-31-97</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href=''>+375 33 263-17-13</a>
                            </li>
                        </ul>
                        <ul className='flex flex-col mt-8'>
                            <li className={styles.listItem}>
                                <a href=''>support@ssrlab.by</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href=''>Телеграм бот</a>
                            </li>
                        </ul>
                        <ul className='flex mt-4'>
                            <li className={styles.icon}>
                                <a href=''>
                                    <img src={iconTelegram} alt='' />
                                </a>
                            </li>
                            <li className={styles.icon}>
                                <a href=''>
                                    <img src={iconFacebook} alt='' />
                                </a>
                            </li>
                            <li className={styles.icon}>
                                <a href=''>
                                    <img src={iconLinkedin} alt='' />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='ml-[70px]'>
                        <ul className='flex flex-col'>
                            <li className={styles.listItem}>
                                <a href=''>Минск, ул. Академическая, 27, к. 134, ГНПО «НПЦ НАН Беларуси по биоресурсам»</a>
                            </li>
                            <li className={styles.listItem}>
                                <a href=''>Минск, ул. Сурганова, 6, комната АИПИ НАН Беларуси</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;