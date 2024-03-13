import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <div className='p-[20px] font-semibold text-lg'>
            <h2>{bookmark.title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;