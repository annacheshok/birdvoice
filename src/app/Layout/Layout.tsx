import cn from 'clsx'
import { IProps } from "./Layout.types";

const Layout = ({ children }: IProps) => {

    const styles = {
        wrapper: cn('min-h-full overflow-hidden'),
    };

    return (
        <div className={styles.wrapper}>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;