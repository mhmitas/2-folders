import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropType from "prop-types"

const Blogs = ({ handleAddToBookmark }) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h3 className="text-xl font-bold">Total Blogs: <span className="btn">{blogs.length}</span></h3><hr />

            <div className="">
                {
                    blogs.map(
                        (blog, idx) => <Blog
                            key={idx}
                            blog={blog}
                            handleAddToBookmark={handleAddToBookmark}
                        ></Blog>
                    )
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropType.func
}

// Bookmarks.propTypes = {
//     blog : PropTypes.string
// }


export default Blogs;