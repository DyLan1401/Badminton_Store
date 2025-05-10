import { Link } from 'react-router-dom';

 function Home() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl font-bold mb-6">Chào mừng đến với Badminton Store</h1>
            <p className="text-xl mb-8 max-w-2xl">
                Cửa hàng chuyên cung cấp các sản phẩm cầu lông chất lượng cao. 
                Chúng tôi cam kết mang đến cho bạn những sản phẩm tốt nhất với giá cả hợp lý.
            </p>
            <Link 
                to="/product-list" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
                Xem sản phẩm
            </Link>
        </div>
    );
};

export default Home;