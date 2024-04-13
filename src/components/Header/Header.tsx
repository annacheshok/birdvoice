import cn from 'clsx'
import logoDark from '../../shared/assets/logo-dark.png';
import logoLight from '../../shared/assets/logo-light.png';
import { Menu } from './_ui';
import { Button } from '../Button';

const Header = () => {
    const styles = {
        headerContainer: cn('flex items-center h-[90px] justify-between'),
        logo: cn('w-[129px] h-[40px] mt-2'),
        buttons: cn('flex')
    };
    return (
        <div className={`container ${styles.headerContainer}`}>
            <img src={logoLight} alt='' className={styles.logo} />
            <Menu />
            <div className={styles.buttons}>
                <Button title='Регистрация' type='button' className='mr-6' />
                <Button title='Вход' type='button' outlined />
            </div>
        </div>

    );
};

export default Header;