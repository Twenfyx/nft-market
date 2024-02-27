
import ape from '../assets/hero/ape.gif'
import BlockchainsSupport from './BlockchainsSupport'
const Hero = () => {
  return (
    <div className="h-screen bg-black">
      <div className='flex justify-evenly text-8xl'>
        <img src={ape} alt="" className='' />
        <div className="flex justify-center items-center ">
          <p className='text-white font-mono'>
            Welcome 
          To <br /> Digital <br />
          <span className="bg-clip-text text-transparent animate-wave-gradient">World</span>


           </p>
        </div>

      </div>
    <BlockchainsSupport />

    </div>
  )
}

export default Hero