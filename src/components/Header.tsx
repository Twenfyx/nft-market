import shoppingCart from '../assets/header/shopping-cart.svg'
import profile from '../assets/header/profile.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black text-white h-16 flex justify-between items-center font-mono text-lg'>

      <div className="flex justify-evenly w-5/12">
        <Link to={"/"}>
          <p>Home</p>
        </Link>
        <p>|</p>

        <Link to={"/market"}>
          <p>Market</p>
        </Link>
        <Link to={"/stats"}>
          <p>Stats</p>
        </Link>
        <Link to={"/create"}>
          <p>Create</p>
        </Link>
      </div>

      <div className="flex justify-evenly w-1/5">
        <Link to={"/login"}>
          <p>Login</p>
        </Link>

        <Link to={"/profile"}>
          <img src={profile} alt="profile" className='w-7' />
        </Link>
        <Link to={"/cart"}>
          <img src={shoppingCart} alt="shopping cart" className='w-7' />
        </Link>

      </div>
    </div>
  )
}

export default Header