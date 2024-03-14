import PropTypes from "prop-types"


const Bookmarks = ({bookmarks}) => {

    // const {author_name} = bookmark

    return (
        <div className="md:w-1/3 ml-4">
            {/* <li>{author_name}</li> */}
            {
                bookmarks.map(
                    (bookmark, idx)=><Bookmark></Bookmark>
                )
            }
        </div>
    );
};


Bookmarks.propTypes = {
    bookmarks : PropTypes.object
}


export default Bookmarks;