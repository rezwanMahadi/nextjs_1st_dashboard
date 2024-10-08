import { Inter, Lusitana, Ubuntu } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400']
});

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['300','400','500','700']
});