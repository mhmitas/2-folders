import PropTypes from "prop-types"


const Blog = ({ blog, handleAddToBookmark }) => {
    const { author_name, author_image, cover_image, posted_date, read_time, title} = blog;
    // console.log(blog)
    // console.log(author_image)
    return (
        <div className=" w-full mb-24 p-4">
            <img className="rounded-sm bg-contain w-full max-h-[450px]" src={cover_image} alt={`cover img of ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <div className='my-4'><img className='w-14 rounded-full' src={author_image} alt="author image" /></div>
                    <div>
                        <h3 className='text-xl font-bold'>{author_name}</h3>
                        <h3><small>{posted_date}</small></h3>
                    </div>
                </div>
                {/*  */}
                <div className='flex items-center gap-2'>
                    <p>{read_time} min read</p>
                    <button onClick={()=>handleAddToBookmark(blog)} className="btn">Add to Bookmark</button>
                </div>
            </div>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p>
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object,
    handleAddToBookmark: PropTypes.func
}



export default Blog;