import React from 'react'
import Layout from '../Components/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateQuantity, clearCart } from '../Features/Cart/Cart'
import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react'

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItem.items)
  const dispatch = useDispatch()

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  }

  const calculateTax = () => {
    return (calculateSubtotal() * 0.1).toFixed(2) // 10% tax
  }

  const calculateTotal = () => {
    return (parseFloat(calculateSubtotal()) + parseFloat(calculateTax())).toFixed(2)
  }

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return
    dispatch(updateQuantity({ id: itemId, quantity: newQuantity }))
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <Link to="/products" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600 mt-2">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart</p>
          </div>

          {cartItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm">
              <ShoppingBag className="w-24 h-24 text-gray-400 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-8">Looks like you haven't added any items yet</p>
              <Link to="/products">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                  Start Shopping
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b text-sm font-medium text-gray-500">
                    <div className="md:col-span-6">Product</div>
                    <div className="md:col-span-2 text-center">Price</div>
                    <div className="md:col-span-2 text-center">Quantity</div>
                    <div className="md:col-span-1 text-center">Total</div>
                    <div className="md:col-span-1"></div>
                  </div>

                  <div className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center gap-4">
                          {/* Product Image */}
                          <div className="md:w-24 flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="w-full h-24 object-contain rounded-md"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1">
                            <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1">In Stock</p>
                          </div>

                          {/* Price */}
                          <div className="md:w-32 text-center">
                            <p className="text-lg font-semibold text-gray-900">${item.price.toFixed(2)}</p>
                          </div>

                          {/* Quantity */}
                          <div className="md:w-32">
                            <div className="flex items-center justify-center space-x-2">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <span className="w-12 text-center font-medium">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Total */}
                          <div className="md:w-28 text-center">
                            <p className="text-lg font-semibold text-indigo-600">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>

                          {/* Remove Button */}
                          <div className="md:w-16 text-center">
                            <button
                              onClick={() => dispatch(removeFromCart(item.id))}
                              className="text-gray-400 hover:text-red-600 transition"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clear Cart Button */}
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="text-sm text-red-600 hover:text-red-700 font-medium transition"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-96">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>${calculateSubtotal()}</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    
                    <div className="flex justify-between text-gray-600">
                      <span>Tax (10%)</span>
                      <span>${calculateTax()}</span>
                    </div>
                    
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total</span>
                        <span>${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Proceed to Checkout
                    </button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      Secure checkout powered by Stripe
                    </p>
                  </div>

                  {/* Payment Methods */}
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-gray-500 text-center mb-3">We accept</p>
                    <div className="flex justify-center space-x-3 text-2xl">
                      <span className="text-gray-400">💳</span>
                      <span className="text-gray-400">🟦</span>
                      <span className="text-gray-400">🟨</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Cart