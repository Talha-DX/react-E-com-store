import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout'
import shoe from '../assets/FrontImage/Shoe.jpeg'
import shoe1 from '../assets/FrontImage/Shoe1.jpeg'
import { ShoppingBag, ArrowRight, Star, Truck, Shield, RefreshCw, ChevronRight, TrendingUp, Award } from 'lucide-react'

const Home = () => {
    // Featured products data
    const featuredProducts = [
        { id: 1, name: "Premium Running Shoes", price: 89.99, rating: 4.5, image: shoe, tag: "Best Seller" },
        { id: 2, name: "Casual Sneakers", price: 69.99, rating: 4.8, image: shoe1, tag: "New Arrival" },
    ]

    const features = [
        { icon: Truck, title: "Free Shipping", description: "On orders over $50" },
        { icon: Shield, title: "Secure Payment", description: "100% secure transactions" },
        { icon: RefreshCw, title: "Easy Returns", description: "30-day return policy" },
        { icon: Award, title: "Quality Guarantee", description: "Premium products only" },
    ]

    const testimonials = [
        { id: 1, name: "Sarah Johnson", role: "Verified Buyer", rating: 5, comment: "Amazing quality! The shoes exceeded my expectations. Fast shipping too!" },
        { id: 2, name: "Michael Chen", role: "Regular Customer", rating: 5, comment: "Best shopping experience ever. Highly recommend Sasta Bazar!" },
        { id: 3, name: "Emma Williams", role: "Fashion Enthusiast", rating: 4, comment: "Great collection at affordable prices. Will shop again!" },
    ]

    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                            <TrendingUp className="w-4 h-4 text-yellow-300" />
                            <span className="text-sm text-white font-medium">Trusted by 10,000+ customers</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Welcome to{' '}
                            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
                                Sasta Bazar
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-indigo-100 mb-8 max-w-3xl mx-auto">
                            Discover premium quality products at unbeatable prices. 
                            Shop the latest collection of shoes, accessories & more.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products">
                                <button className="group bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto">
                                    <ShoppingBag className="w-5 h-5" />
                                    Shop Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                                View Collection
                            </button>
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-white/20">
                            <div>
                                <div className="text-3xl font-bold text-white">500+</div>
                                <div className="text-indigo-100">Products</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">10k+</div>
                                <div className="text-indigo-100">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">4.8</div>
                                <div className="text-indigo-100">Rating</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">24/7</div>
                                <div className="text-indigo-100">Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-indigo-600">Sasta Bazar</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide the best shopping experience with quality products and exceptional service
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
                                    <feature.icon className="w-10 h-10 text-indigo-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="bg-gradient-to-b from-gray-50 to-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Featured <span className="text-indigo-600">Products</span>
                            </h2>
                            <p className="text-gray-600">Check out our handpicked collection</p>
                        </div>
                        <Link to="/products" className="text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-1">
                            View All
                            <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="relative overflow-hidden h-80">
                                    <img 
                                        src={product.image} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                            {product.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 fill-current text-yellow-400" />
                                            <span className="text-sm font-medium text-gray-600">{product.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">Premium quality with comfortable fit and stylish design.</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                                        <Link to="/products">
                                            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors">
                                                Shop Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-indigo-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="text-indigo-600">Customers Say</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who trust Sasta Bazar
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all">
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                                <div>
                                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Start Shopping?
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8">
                        Get the best deals on premium products. Limited time offer!
                    </p>
                    <Link to="/products">
                        <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                            Browse All Products
                        </button>
                    </Link>
                </div>
            </div>

            {/* Add custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
                
                .delay-1000 {
                    animation-delay: 1s;
                }
            `}</style>
        </Layout>
    )
}

export default Home