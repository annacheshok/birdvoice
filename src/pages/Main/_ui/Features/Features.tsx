import cn from 'clsx';
import iconFeatureFirst from '../../../../shared/assets/feature-1.png';
import iconFeatureSecond from '../../../../shared/assets/feature-2.png';
import iconFeatureThird from '../../../../shared/assets/feature-3.png';

const Features = () => {
    const styles = {
        card: cn('max-w-[296px] flex flex-col rounded-[24px] p-2 bg-[#DED8BC] items-center '),
        title: cn('font-medium text-[20px] text-[#216F75] text-center'),
        icon: cn('w-[128px] h-[96px] mb-4'),
    };

    return (
        <section className='container flex justify-between relative bottom-[90px]'>
            <div className={styles.card}>
                <img src={iconFeatureFirst} alt='' className={styles.icon} />
                <p className={styles.title}>
                    Простое взаимодействие
                    с интерфейсом
                </p>
            </div>
            <div className={styles.card}>
                <img src={iconFeatureSecond} alt='' className={styles.icon} />
                <p className={styles.title}>
                    Большая научная база данных
                    с обновлением
                </p>
            </div>
            <div className={styles.card}>
                <img src={iconFeatureThird} alt='' className={styles.icon} />
                <p className={styles.title}>
                    Ресурс для получения
                    новых знаний
                </p>
            </div>
        </section>
    );
};

export default Features;