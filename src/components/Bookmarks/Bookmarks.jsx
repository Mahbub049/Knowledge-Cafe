import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="w-1/3">
            <div className="p-[30px]">
                <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                <div className="p-[20px]">
                    {
                        bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired
}

export default Bookmarks;