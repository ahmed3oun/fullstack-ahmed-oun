import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card.component';
import { baseURL } from '../utils/constants'
import { Product } from '../utils/types';
import axios from 'axios';
import SearchInput from '../components/search-input.component';


async function getAllData(q?: string) {
    try {
        let url = new URL(`${baseURL}/product/find/all`) as any;
        if (q) {
            const params = { q };
            url.q = new URLSearchParams(params);
        }

        const res = await fetch(url);

        if (!res.ok) {
            const message = `An error has occured: ${res.status} - ${res.statusText}`;
            throw new Error(message);
        }

        const data = await res.json();

        return data.products;

    } catch (err) {
        console.log(err);
        throw err;
    }
}

async function getProductById(id: any) {

    if (id) {
        try {
            let url = new URL(`${baseURL}/product/find/${id}`) as any;
            const res = await axios.get(url);

            if (res.status !== 200) {
                const message = `An error has occured: ${res.status} - ${res.statusText}`;
                throw new Error(message);
            }
            const data = await res.data;
            return data.product;

        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

const Products = () => {

    useEffect(() => {
        getAllData().then((products) => {
            setProducts([...products])
        })
    }, []);
    const handleSearch = (query: string) => {
        setSearchQuery(query);
      };

    const [searchQuery, setSearchQuery] = useState<string>('');

    const [products, setProducts] = useState<Product[]>([]);

    return (
        <div className="p-4">
            {/* Search Input */}
            <SearchInput onSearch={handleSearch} />

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                    <Link key={product.id} to={`/product/${product.id}`}>
                        <ProductCard name={product.title} price={product.price} image={product.images[0]} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Products;