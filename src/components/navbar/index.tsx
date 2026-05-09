'use client'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export default function NavBar() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999]">
      <ul className="flex items-center gap-6 px-8 py-4 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl">
        
        <li>
          <Link href="#home">
            <HomeIcon
              sx={{
                color: "white",
                fontSize: 40,
                transition: "0.3s"
              }}
            />
          </Link>
        </li>

            <li>
          <Link href="#catalogue">
            <MenuBookIcon
              sx={{
                color: "white",
                fontSize: 40
              }}
            />
          </Link>
        </li>


        <li>
          <Link href="#aboutus">
            <InfoIcon
              sx={{
                color: "white",
                fontSize: 40
              }}
            />
          </Link>
        </li>

      </ul>
    </nav>
  );
}