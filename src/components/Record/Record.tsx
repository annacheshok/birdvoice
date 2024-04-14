import { IRecord } from "./Record.types";
import cn from 'clsx';

const Record = ({ src, name }: IRecord) => {
  const styles = {
      record: cn('w-full bg-cover max-w-[436px] h-[278px] rounded-[32px] shadow-[4px_4px_16px_0_rgba(46,42,26,0.2)] p-[16px]'),
      name: cn('text-xl font-medium text-[#eef0f5] flex justify-center items-center h-full text-center')
    };
  return ( 
  
    <div className={styles.record} style={{ background: `url(${src}) #1b181066`}} >
      <span className={styles.name}>{name}</span>
    </div>
    
  );
};

export default Record;
