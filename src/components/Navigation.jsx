import { Link } from 'react-router-dom';

function Navigation() {
   
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <Link to="/" className="hover:text-gray-300">Trang chủ</Link>
                    <Link to="/product-list" className="hover:text-gray-300">Sản phẩm</Link>
                </div>

                <div className="flex space-x-4">
               
                            <Link to="/cart" className="hover:text-gray-300">Giỏ hàng</Link>
                <Link to="/login" className="hover:text-gray-300">Đăng nhập</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 