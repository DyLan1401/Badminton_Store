import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const login = true;

    const handleLogout = () => {
        // Add logout logic here
        navigate('/login');
    };

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Menu Toggle */}
                    <div className="flex items-center">
                        <button 
                            className="p-2 rounded-md hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                            <span className="block w-6 h-0.5 bg-gray-600"></span>
                        </button>
                        <Link to="/" className="ml-4">
                            <span className="text-xl font-bold text-gray-800">Badminton Store</span>
                        </Link>
                    </div>

                    {/* Main Navigation - Desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-indigo-600">Home</Link>
                        <div className="relative group">
                            <Link to="/products" className="text-gray-600 hover:text-indigo-600">Products</Link>
                        </div>
                        <Link to="/blogs" className="text-gray-600 hover:text-indigo-600">Blog</Link>
                        <Link to="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link>
                    </nav>

                    {/* Header Right Icons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-600 hover:text-indigo-600">
                            <i className="fas fa-search"></i>
                        </button>
                        {login ? (
                            <button onClick={handleLogout} className="text-gray-600 hover:text-indigo-600">
                                <i className="far fa-user"></i>
                            </button>
                        ) : (
                            <Link to="/login" className="text-gray-600 hover:text-indigo-600">
                                <i className="far fa-user"></i>
                            </Link>
                        )}
                        <div className="relative group">
                            <button className="text-gray-600 hover:text-indigo-600">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                            <div className="hidden group-hover:block absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg p-4">
                                <div className="space-y-4">
                                    <div className="border-t pt-4">
                                        <div className="flex space-x-2">
                                            <Link to="/cart" className="flex-1 text-center py-2 bg-gray-100 hover:bg-gray-200 rounded">Cart</Link>
                                            <Link to="/checkout" className="flex-1 text-center py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded">Checkout</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    <Link to="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100">Home</Link>
                    <Link to="/products" className="block px-3 py-2 text-gray-600 hover:bg-gray-100">Products</Link>
                    <Link to="/blogs" className="block px-3 py-2 text-gray-600 hover:bg-gray-100">Blog</Link>
                    <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:bg-gray-100">Contact</Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar; 