import Hero from '../components/Hero'
import tinyFace from '../assets/hero/tinyface2.png'

const Home = () => {
  return (
    <div className=''>
      <Hero />
 <div className='bg-white'>
      <p className='bg-white text-center font-mono text-8xl mt-20'>About</p>
      </div>

      <div className=" flex justify-center items-center bg-white ">
    <div className='myDiv'>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam. Eos tempore commodi sed quasi praesentium nihil laudantium recusandae nam delectus! Sapiente ullam qui explicabo aliquid mollitia molestiae. Tenetur, doloribus!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam. Eos tempore commodi sed quasi praesentium nihil laudantium recusandae nam delectus! Sapiente ullam qui explicabo aliquid mollitia molestiae. Tenetur, doloribus!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam. Eos tempore commodi sed quasi praesentium nihil laudantium recusandae nam delectus! Sapiente ullam qui explicabo aliquid mollitia molestiae. Tenetur, doloribus!</div>
    </div>

        <img src={tinyFace} alt="" className="myNft" />
        <div className='myDiv'>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam. Eos tempore commodi sed quasi praesentium nihil laudantium recusandae nam delectus! Sapiente ullam qui explicabo aliquid mollitia molestiae. Tenetur, doloribus!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam. Eos tempore commodi sed quasi praesentium nihil laudantium recusandae nam delectus! Sapiente ullam qui explicabo aliquid mollitia molestiae. Tenetur, doloribus!</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, laboriosam. Eos tempore commodi sed quasi praesentium nihil laudantium recusandae nam delectus! Sapiente ullam qui explicabo aliquid mollitia molestiae. Tenetur, doloribus!</div>
    </div>

      </div>
    </div>
  )
}

export default Home;
