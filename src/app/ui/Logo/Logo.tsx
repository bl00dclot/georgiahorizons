import Image from "next/image";
import Link from "next/link";
import GeorgiaHorizonsLogoText from './../../../../public/logoText.svg?url'
import GeorgiaHorizonsLogoSmall from './../../../../public/logoSmall.svg?url'

interface sizeProps{
    widthText: number;
    heightText: number;
    widthIcon: number;
    heightIcon: number;
}
const Logo = ({widthText, heightText, widthIcon, heightIcon}: sizeProps) => (
  <div className="flex items-center">
    <Link href="/">
      <Image 
        className='m-2'
        src={GeorgiaHorizonsLogoSmall}
        alt='Sun and Mountain logo small'
        width={widthIcon}
        height={heightIcon}
      />
    </Link>
    <Link href="/">
      <Image
        className='mt-2'
        src={GeorgiaHorizonsLogoText}
        alt='Georgia Horizons logo'
        width={widthText}
        height={heightText}
      />
    </Link>
  </div>
);

export default Logo