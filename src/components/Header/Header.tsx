import cn from 'clsx'
import logoDark from '../../shared/assets/logo-dark.png';
import logoLight from '../../shared/assets/logo-light.png';
import icon from '../../shared/assets/icon.png';
import arrow from '../../shared/assets/arrow.png';
import { Menu } from './_ui';
import { Button } from '../Button';
import { IHeaderProps } from './Header.types';
import { Link } from 'react-router-dom';

const Header = ({ src }: IHeaderProps) => {
    const styles = {
        headerContainer: cn('flex items-center h-[90px] justify-between'),
        logo: cn('w-[129px] h-[40px] mt-2'),
        buttons: cn('flex'),
        menu: cn('flex relative items-center bg-[#216f75] text-2xl rounded-b-2xl w-[321px] p-[16px] pt-[22px] mt-[-5px]'),
        name: cn('font-medium text-[#eceef2] ml-[8px]'),
        arrow: cn('absolute top-[30px] right-[16px] cursor-pointer'),
        drop: cn('hidden group-hover:block absolute top-[75px] text-[#fff] left-0 text-xl font-normal rounded-b-2xl w-[321px] bg-[#216f75] p-[18.5px] pb-[2.5px]'),
        dropli: cn('mb-[16px] cursor-pointer'),
    };

    return (
        <header className={`container ${styles.headerContainer}`}>
            <img src={src == 'light' ? logoLight : logoDark} alt='' className={styles.logo} />
            {src == 'light' ? <Menu /> : ''}
            {src == 'light' ?
                <div className={styles.buttons}>
                    <Button title='Регистрация' type='button' className='mr-6' />
                    <Button title='Вход' type='button' outlined />
                </div> :
                <div className={`group ${styles.menu}`}>
                    <img src={icon} alt="" />
                    <span className={styles.name}>Иван</span>
                    <img className={styles.arrow} src={arrow} alt="" />
                    <ul className={styles.drop}>
                        <li className={styles.dropli}><Link to="recognition_service">Сервис распознования</Link></li>
                        <li className={styles.dropli}><Link to="history_recognition">История распознования</Link></li>
                        <li className={styles.dropli}><Link to="settings">Настройки профиля</Link></li>
                        <li className={styles.dropli}>Выход</li>
                    </ul>
                </div>}
        </header>

    );
};

export default Header;