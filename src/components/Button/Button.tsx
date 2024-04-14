import { IButtonProps } from "./Button.types";
import cn from 'clsx';

const Button = ({ title, outlined, type, className }: IButtonProps) => {
    const styles = {
        button: cn(`px-6 py-2 font-normal text-[16px] text-white rounded-[8px] hover:bg-[#216F75] ${className}`, {
            'bg-transparent !border-2 !border-[#216F75]': outlined,
            'bg-[#216F75]': !outlined,
        }),
    };
    return (
        <button type={type} className={styles.button}>
            {title}
        </button>
    );
};

export default Button;
