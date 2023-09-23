import user from '../../assets/images/user.png'
const Banner = () => {
    return (
        <div className='gradient flex justify-between items-center pt-10'>
            <div className='ml-48'>
                <h1 className='text-7xl font-extrabold'>One Step <br /> Closer To Your <br />
                    <span className='text-[#7E90FE]'>Dream Job</span></h1>
                <p className='mt-6 mb-12'>
                    Explore thousands of job opportunities with all the <br />information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.
                </p>
                <button className='btn btn-primary'>Get Started</button>
            </div>
            <img className='w-[816px] h-[744px] mr-24 ' src={user} alt="user_pic" />
        </div>
    );
};

export default Banner;