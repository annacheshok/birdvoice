import cn from 'clsx'
import { ENavigation } from "../../../../shared/lib/constants";

const Menu = () => {
    const styles = {
        menu: cn('flex'),
        menuItem: cn('mr-6 last:mr-0 font-normal text-[16px] text-white hover:text-[#216F75]')
    };

    return (
        <ul className={styles.menu}>
            {Object.values(ENavigation).map((item, index) => {
                return (
                    <li key={crypto.randomUUID()} className={styles.menuItem}>
                        <a href={`#section${index}`}>{item}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default Menu;
