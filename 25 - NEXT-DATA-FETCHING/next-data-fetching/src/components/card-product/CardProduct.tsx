/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { ITypeProps } from './types';

const CardProduct: React.FC<ITypeProps> = ({id, title, price, image}: ITypeProps) => {

    return (

        <div>
            <a className="relative flex mx-3 mt-3 overflow-hidden h-60 rounded-xl" href="#">
                <img className='absolute top-0 right-0 object-cover w-full h-full peer' src={image} alt="product image" />
            </a>
            <div className='px-5 pb-5 mt-4'>
                <a href="#">
                    <h5 className='text-xl tracking-tight text-white'>{title}</h5>
                </a>
                <div className='flex items-center justify-between mt-2 mb-5'>
                    <p>
                        <span className='text-3xl font-bold text-white'>{price}</span>
                    </p>
                </div>
                <a href="#" className='hover:border-white/40 flex items-center justify-center rounded-md border border-transparent'>
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 mr-2' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth="2">
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3 3h21.4 2M7 13h1014-8H5.4M7 13L5 5M7 13l-2.293 2.293c-.63.63-.184.707 1.797H117m0 0a2'/>
                    </svg>
                    Agregar al carrito
                </a>
            </div>
        </div>

    )

};

export default CardProduct;