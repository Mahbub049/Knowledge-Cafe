import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookmark, handleTime}) => {
    const {id, cover, author_img, author, posted_date, reading_time, title, hashtags} = blog;
    return (
        <div>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="mt-[34px] flex gap-6 items-center">
                    <img className="w-[60px]" src={author_img} alt="" />
                    <div>
                        <div>
                            <h3 className="text-2xl font-bold">{author}</h3>
                            <p className="font-semibold">{posted_date}</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <p>{reading_time} min read</p>
                    <button onClick={()=> handleBookmark(blog)}><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className="mt-[16px] mb-[16px] w-[737px] text-[40px] font-bold leading-[64px]">{title}</h1>
            <p className="flex gap-4">
                {
                    hashtags.map((hash, idx)=><span key={idx} className="text-xl font-medium "><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleTime(reading_time, id)} className='mt-[21px] text-[#6047EC] text-xl font-semibold underline'>Mark As Read</button>
            <hr className='my-[40px] border-black' />
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired
}


export default Blog;