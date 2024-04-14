import { IRecord } from "./Recod.types";
import cn from 'clsx';

const Record = ({ title, outlined, type, className }: IRecord) => {
    const styles = {
        button: cn(`px-6 py-2 font-normal text-[16px] text-white rounded-[8px] hover:bg-[#216F75] ${className}`, {
            'bg-transparent !border-2 !border-[#216F75]': outlined,
            'bg-gradient-to-r from-teal-500 to-teal-700': !outlined,
        }),
    };
    return ( <></>
        
    );
};

export default Record;
