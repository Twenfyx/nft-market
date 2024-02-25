import shoppingCart from '../assets/header/shopping-cart.svg'
import profile from '../assets/header/profile.svg'

const Header = () => {
  return (
    <div className='bg-black text-white h-16 flex justify-between items-center font-mono text-lg'>
        
        <div className="flex justify-evenly w-5/12">
        <p>Home</p>
        <p>|</p>
        <p>Market</p>
        <p>Stats</p>
        <p>Create</p>
        </div>

        <div className="flex justify-evenly w-1/5">
        <p >Login</p>
        <img src={profile} alt="profile" className='w-7'/>
        <img src={shoppingCart} alt="shopping cart" className='w-7'/>
        
        </div>
    </div>
  )
}

export default Header