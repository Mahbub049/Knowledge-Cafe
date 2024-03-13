import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover, author_img, author, posted_date, reading_time, title, hashtags} = blog;
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
                <div>
                    <p>{reading_time} min read</p>
                </div>
            </div>
            <h1 className="mt-[16px] mb-[16px] w-[737px] text-[40px] font-bold leading-[64px]">{title}</h1>
            <p className="flex gap-4">
                {
                    hashtags.map((hash, idx)=><span key={idx} className="text-xl font-medium "><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;