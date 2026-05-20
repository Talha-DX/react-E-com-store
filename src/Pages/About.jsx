import React from 'react'
import Layout from '../Components/Layout'
import { Users, Target, Award, Heart, Coffee, Globe, Rocket, TrendingUp, Shield, Zap } from 'lucide-react'

const About = () => {
  const teamMembers = [
    { id: 1, name: "Alex Thompson", role: "CEO & Founder", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Sarah Martinez", role: "Head of Design", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "David Chen", role: "Product Manager", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Emily Rodriguez", role: "Customer Success", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  ]

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers" },
    { icon: Rocket, value: "500+", label: "Products Sold" },
    { icon: TrendingUp, value: "98%", label: "Satisfaction Rate" },
    { icon: Globe, value: "25+", label: "Countries" },
  ]

  const values = [
    { icon: Heart, title: "Customer First", description: "We prioritize our customers' needs and satisfaction above everything else." },
    { icon: Shield, title: "Quality Assurance", description: "Every product undergoes strict quality control measures." },
    { icon: Zap, title: "Innovation", description: "Constantly evolving to bring you the latest and best products." },
    { icon: Target, title: "Integrity", description: "Transparent business practices and honest communication." },
  ]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-yellow-300">Sasta Bazar</span>
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              We're on a mission to revolutionize online shopping by providing 
              premium quality products at affordable prices.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
          <div className="bg-white rounded-2xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 rounded-full px-4 py-2 mb-6">
                <Coffee className="w-4 h-4" />
                <span className="text-sm font-semibold">Our Journey</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Building the Future of <span className="text-indigo-600">E-Commerce</span>
              </h2>
              <p className="text-gray-600 text-lg mb-4">
                Founded in 2020, Sasta Bazar started with a simple idea: make quality products 
                accessible to everyone at fair prices. What began as a small team of passionate 
                individuals has grown into a thriving community of over 10,000 satisfied customers.
              </p>
              <p className="text-gray-600 text-lg mb-6">
                Today, we're proud to offer a curated selection of premium products across 
                multiple categories, all backed by our commitment to quality and customer satisfaction.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {teamMembers.slice(0, 3).map((member) => (
                    <img key={member.id} src={member.image} alt={member.name} className="w-10 h-10 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-semibold">Meet our team</span> of dedicated professionals
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3" 
                  alt="Team working together" 
                  className="w-full h-96 object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-lg font-semibold">Passionate team</p>
                  <p className="text-sm opacity-90">Working together to serve you better</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-indigo-600">Mission & Vision</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Guided by our core principles, we strive to make a difference in e-commerce
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize access to quality products by building a platform that connects 
                  people with authentic, affordable, and innovative solutions. We strive to create 
                  a seamless shopping experience that delights customers at every touchpoint.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted and customer-centric e-commerce platform globally, 
                  where quality meets affordability. We envision a future where everyone can 
                  access premium products without breaking the bank.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Core <span className="text-indigo-600">Values</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all group hover:transform hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-indigo-100 to-purple-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-7 h-7 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Meet Our <span className="text-indigo-600">Leadership</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The passionate individuals driving our success
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                    <div className="flex justify-center gap-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-indigo-600 hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.54-11.86c0-.21-.005-.424-.015-.636A10.016 10.016 0 0024 4.57z"/>
                        </svg>
                      </button>
                    </div>
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
              Want to Learn More?
            </h2>
            <p className="text-indigo-100 text-lg mb-8">
              Get in touch with us to discover how we can help you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-all transform hover:scale-105">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all">
                View Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About