export interface IRecord {
    title?: string | null;
    outlined?: boolean | null;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string | null;
};