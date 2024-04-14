import cn from 'clsx'
import { IProps } from "./Layout.types";
import { Footer } from '../../components';

const Layout = ({ children }: IProps) => {

    const styles = {
        wrapper: cn('min-h-full overflow-hidden'),
    };

    return (
        <div className={styles.wrapper}>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;