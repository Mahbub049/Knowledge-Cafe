import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='mx-auto container mb-[32px]'>
            <div className="mt-[50px] flex justify-between items-center">
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <img className='w-[60px] mb-[32px]' src={profile} alt="" />
            </div>
            <hr />
        </header>
    );
};

export default Header;