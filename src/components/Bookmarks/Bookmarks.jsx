import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, reading_time}) => {
    return (
        <div className="md:w-1/3">
            <div>
                <h2 className='text-3xl'>Reading Time: {reading_time}</h2>
            </div>
            <h2 className="text-4xl border-b-2 py-2">BookMarked Blogs: {bookmarks.length}</h2>
            <div className='bg-gray-200 rounded-lg'>
                {
                    bookmarks.map( bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
                    )
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    reading_time: PropTypes.number
}
export default Bookmarks;