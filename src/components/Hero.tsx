import ape from '../assets/hero/ape-2.gif';
import BlockchainsSupport from './BlockchainsSupport';

const Hero = () => {
  return (
    <div className="h-screen flex flex-col justify-between bg-black">
      <div className="h-4/5 flex justify-evenly items-center text-8xl">
        <img src={ape} alt="" className="h-90" />
        <div className="flex justify-center items-center ">
          <p className="text-white font-mono">
            Welcome
            To <br /> Digital <br />
            <span className="bg-clip-text text-transparent animate-wave-gradient">World</span>
          </p>
        </div>
      </div>
      <div className="h-1/5">
        <BlockchainsSupport />

      </div>
    </div>
  );
};

export default Hero;

