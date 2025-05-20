import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {blog.content}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.author}</span>
                    <span>{blog.date}</span>
                </div>
                <Link 
                    to={`/blogs/${blog.id}`}
                    className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
