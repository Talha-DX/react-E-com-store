import React from 'react'
import Layout from '../Components/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Features/Product/Products'
import { addToCart } from '../Features/Cart/Cart'
import { ShoppingCart, Zap, Star, TrendingUp, Package, Truck } from 'lucide-react'

const Products = () => {
    const products = useSelector((state) => state.products.item);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchData());
    }, []);

    // Skeleton loader for products
    if (products.length === 0) {
        return (
            <Layout>
                <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[...Array(8)].map((_, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                                    <div className="h-64 bg-gray-200"></div>
                                    <div className="p-6">
                                        <div className="h-6 bg-gray-200 rounded mb-3"></div>
                                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded mb-4"></div>
                                        <div className="h-8 bg-gray-200 rounded mb-4"></div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-10 bg-gray-200 rounded"></div>
                                            <div className="h-10 bg-gray-200 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                            <p className="text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
                                Discover our curated collection of high-quality products designed to elevate your lifestyle
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Bar */}
                <div className="bg-white shadow-sm sticky top-0 z-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Truck className="w-4 h-4" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <Package className="w-4 h-4" />
                                <span>30-Day Returns</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                                <TrendingUp className="w-4 h-4" />
                                <span>Best Prices</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Results count */}
                    <div className="mb-6 flex justify-between items-center">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold text-gray-900">{products.length}</span> products
                        </p>
                        <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products.map((product, index) => (
                            <div 
                                key={product.id} 
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Product Image Container */}
                                <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-64">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-3 right-3">
                                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                            <Star className="w-3 h-3 inline mr-1" />
                                            Top Rated
                                        </div>
                                    </div>
                                    {/* Quick view overlay */}
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                </div>

                                {/* Product Info */}
                                <div className="p-5">
                                    <div className="mb-2">
                                        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 min-h-[56px] group-hover:text-indigo-600 transition-colors">
                                            {product.name}
                                        </h2>
                                    </div>
                                    
                                    <p className="text-gray-500 text-sm mb-3 line-clamp-2 min-h-[40px]">
                                        {product.detail}
                                    </p>

                                    {/* Rating placeholder */}
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                                        ))}
                                        <span className="text-xs text-gray-500 ml-2">(128 reviews)</span>
                                    </div>

                                    {/* Price */}
                                    <div className="mb-4">
                                        <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                                        <span className="text-sm text-gray-400 line-through ml-2">
                                            ${(product.price * 1.2).toFixed(2)}
                                        </span>
                                        <span className="text-xs text-green-600 ml-2">Save 20%</span>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <button 
                                            className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2.5 rounded-xl hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 group/btn"
                                            onClick={() => dispatch(addToCart(product))}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <ShoppingCart className="w-4 h-4 group-hover/btn:animate-bounce" />
                                                <span className="text-sm font-medium">Add to Cart</span>
                                            </span>
                                        </button>

                                        <button 
                                            className="relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2.5 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                            onClick={() => {/* Add buy now logic */}}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                <Zap className="w-4 h-4" />
                                                <span className="text-sm font-medium">Buy Now</span>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Section */}
                    {products.length > 8 && (
                        <div className="text-center mt-12">
                            <button className="px-8 py-3 bg-white border-2 border-indigo-600 text-indigo-600 rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-300 font-semibold">
                                Load More Products
                            </button>
                        </div>
                    )}
                </div>

                {/* Newsletter Section */}
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white mt-12">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                        <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
                        <p className="text-indigo-100 mb-6">Get the latest updates on new products and exclusive offers</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-100 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom CSS for animations */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                    opacity: 0;
                }
            `}</style>
        </Layout>
    )
}

export default Products