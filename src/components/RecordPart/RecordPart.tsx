import { IRecordPart } from "./RecordPart.types";
import cn from 'clsx';

const Record = ({ src, name, time }: IRecordPart) => {
  const styles = {
      recordPart: cn('relative flex items-end justify-between w-full bg-cover max-w-[436px] h-[278px] rounded-[32px] shadow-[4px_4px_16px_0_rgba(46,42,26,0.2)] px-8 py-6 '),
      gradientOverlay: 'absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(238,240,245,0.7)]',
      name: cn('relative z-10	text-xl'),
      times: cn('relative z-10 text-sm'),
    };
  return ( 
  
    <div className={styles.recordPart} style={{ backgroundImage: `url(${src})`}} >
      {/* Убрать коммент когда заменятся картинки */}
      {/* <div className={styles.gradientOverlay}></div> */}
      <div className={styles.name}>{name}</div>
      <div className={styles.times}>
        <div className="time">{time}</div>
        <div className="time">{time}</div>
      </div>
    </div>
    
  );
};

export default Record;
