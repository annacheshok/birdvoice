import cn from 'clsx';
import iconRecognition from '../../../../shared/assets/icon-recognition.png';
import iconSave from '../../../../shared/assets/icon-save.png';
import iconBd from '../../../../shared/assets/icon-bd.png';

const Cards = () => {
    const styles = {
        card: cn('max-w-[296px] flex flex-col bg-[#216F75] rounded-[24px] p-6'),
        title: cn('font-medium text-[20px] text-[#DED8BC]'),
        text: cn('font-normal text-[16px] text-white mt-4'),
        icon: cn('w-12 h-12 mb-4'),
    };

    return (
        <div className='flex items-center'>
            <div className='flex flex-col'>
                <div className={`mb-4 ${styles.card}`}>
                    <img src={iconRecognition} alt='' className={styles.icon} />
                    <p className={styles.title}>
                        Быстрое распознавание
                    </p>
                    <p className={styles.text}>
                        Сервис обеспечивает быстрое и точное распознавание птиц по ваших аудиозаписях без длительного ожидания результатов
                    </p>
                </div>
                <div className={styles.card}>
                    <img src={iconSave} alt='' className={styles.icon} />
                    <p className={styles.title}>
                        Сохранение истории
                    </p>
                    <p className={styles.text}>
                        Сервис позволяет в любое удобное время просматривать результаты распознавания ваших старых аудиозаписей, сохраняя историю и обеспечивая доступ к предыдущим идентификациям птиц
                    </p>
                </div>
            </div>
            <div className={`ml-4 ${styles.card}`}>
                <img src={iconBd} alt='' className={styles.icon} />
                <p className={styles.title}>
                    База данных
                </p>
                <p className={styles.text}>
                    Сервис имеет обширную базу данных, включающую большое количество записей различных видов птиц, что обеспечивает высокую точность распознавания
                </p>
            </div>
        </div>
    );
};

export default Cards;