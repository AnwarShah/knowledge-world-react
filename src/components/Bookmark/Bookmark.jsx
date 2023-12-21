import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="p-2 my-2 ml-8">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};


Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;