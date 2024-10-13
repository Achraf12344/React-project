import clsx , { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn (...classes: ClassValue[]) {
    return twMerge(clsx(classes))
}
export function toUpperCase (str: string) {
    return str.toUpperCase();
}
export function capitalize (str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}