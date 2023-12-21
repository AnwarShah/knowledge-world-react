import PropTypes from 'prop-types';
import { FiBookmark } from "react-icons/fi";

const Blog = ({blog, handleAddToBookmarks}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='mb-16'>
            <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover picture of the blog ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h3 className="text-2xl">{author}</h3>
                        <p className="text-xl">{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='flex items-center gap-x-1'>{reading_time} min read <button onClick={handleAddToBookmarks} href='#'><FiBookmark /></button></span>
                </div>
            </div>
            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>
                {
                    hashtags.map( (hash,idx) => <span key={idx}><a href="#">#{hash}</a> </span>)
                }
            </p>      
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;
