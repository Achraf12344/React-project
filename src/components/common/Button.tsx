import { cn } from '../../lib/utils';

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    type?: 'primary' | 'secondary' | 'outline' | 'outline-secondary';
    onClick?: () => void;
}

export default function Button({ className, children, type = 'primary', onClick }: ButtonProps) {
    const baseClasses = 'font-bold text-base py-2 px-4 rounded-lg';
    const typeClasses = {
        primary: 'text-white bg-[#52C460] hover:bg-white hover:text-[#52C460] hover:outline hover:outline-[#52C460] hover:outline-1',
        secondary: 'text-white bg-[#12A19A] hover:bg-white hover:text-[#12A19A] hover:outline hover:outline-[#12A19A] hover:outline-1',
        outline: 'bg-white text-[#52C460] border border-[#52C460] hover:bg-[#52C460] hover:text-white',
        'outline-secondary': 'bg-white text-[#12A19A] border border-[#12A19A] hover:bg-[#12A19A] hover:text-white',
    };

    return (
        <button onClick={onClick} className={cn(baseClasses, typeClasses[type], className)}>
            {children}
        </button>
    );
}
