'use client'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
export default function Header(){
    return(
        <div className="fixed top-0 z-9999">
            <ul>
                <li>
                    <Link href= "#home"> <HomeIcon /> </Link>
                    
                </li>
            </ul>
            
        </div>
    );
}