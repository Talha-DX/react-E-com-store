import React from 'react'
import Layout from '../Components/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../Features/Product/Products'

const Home = () => {

    const products = useSelector((state) => state.products.item);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchData());
    }, []);

    return (
        <Layout>
            <div className='flex justify-center items-center border-b-2 border-silver p-5'>
                <h1 className='text-5xl p-5 font-bold '>Home Page</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                {products.map((product) => (
                    <div key={product.id} className='border-2 border-silver p-5 m-5 rounded-lg'>
                        <img src={product.image} alt={product.name} className='w-full h-auto' />
                        <h2 className='text-2xl font-bold'>{product.name}</h2>
                        <p className='text-gray-600'>{product.detail}</p>
                        <p className='text-green-500 font-bold'>${product.price}</p>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            <button className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-400">
                                Add to Cart
                            </button>

                            <button className="bg-green-500 text-white p-2 rounded-md hover:bg-green-400">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Home