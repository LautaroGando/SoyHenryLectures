"use client";

import CategoriesUI from '@/components/categories-ui/CategoriesUI';
import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products/categories").then((res) => res.json()).then((data) => setCategories(data));

    }, []);

    return (

        <div>
            {
                !categories.length ? (
                    <p>Loading...</p>
                ) : (
                    <CategoriesUI categories={categories}/>
                )
            }
        </div>

    )

};

export default Categories;