import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../../components";
import { Product } from "../OneProductView/OneProductView";
import axios from "axios";

export const DashboardView = () => {
    const [productList, SetProductList] = useState<Product[]>([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                SetProductList(res.data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sort = event.target.value;
        let sortQuery = "";

        switch (sort) {
            case "price-desc":
                sortQuery = "/sort/price/desc";
                break;
            case "price-asc":
                sortQuery = "/sort/price/asc";
                break;
            default:
                break;
        }

        axios
            .get(`http://localhost:8000/api/products${sortQuery}`)
            .then((res) => {
                SetProductList(res.data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <>
            <Navbar />
            <section>
                <div className="mx-auto">
                    <div className="flex justify-center items-center">
                        <div className="space-y-4 lg:block mr-10">
                            <div>
                                <label
                                    htmlFor="SortBy"
                                    className="block text-xs font-medium text-gray-700"
                                >
                                    Sort By
                                </label>
                                <select
                                    id="SortBy"
                                    className="mt-1 p-2 rounded border-gray-300 text-sm"
                                    onChange={handleSort}
                                >
                                    <option value="">Sort By</option>
                                    {/* <option value="Title, DESC">
                                                    Title, DESC
                                                </option>
                                                <option value="Title, ASC">
                                                    Title, ASC
                                                </option> */}
                                    <option value="price-desc">Price, DESC</option>
                                    <option value="price-asc">Price, ASC</option>
                                </select>
                            </div>
                            {/* <div>
                                <p className="block text-xs font-medium text-gray-700">
                                    Filters
                                </p>
                                <div className="mt-1 space-y-2">
                                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                            <span className="text-sm font-medium">
                                                {" "}
                                                Availability{" "}
                                            </span>
                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700">
                                                    {" "}
                                                    0 Selected{" "}
                                                </span>
                                                <button
                                                    type="button"
                                                    className="text-sm text-gray-900 underline underline-offset-4"
                                                >
                                                    Reset
                                                </button>
                                            </header>
                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                <li>
                                                    <label
                                                        htmlFor="FilterInStock"
                                                        className="inline-flex items-center gap-2"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id="FilterInStock"
                                                            className="h-5 w-5 rounded border-gray-300"
                                                        />
                                                        <span className="text-sm font-medium text-gray-700">
                                                            In Stock (5+)
                                                        </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        htmlFor="FilterPreOrder"
                                                        className="inline-flex items-center gap-2"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id="FilterPreOrder"
                                                            className="h-5 w-5 rounded border-gray-300"
                                                        />
                                                        <span className="text-sm font-medium text-gray-700">
                                                            Pre Order (3+)
                                                        </span>
                                                    </label>
                                                </li>
                                                <li>
                                                    <label
                                                        htmlFor="FilterOutOfStock"
                                                        className="inline-flex items-center gap-2"
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id="FilterOutOfStock"
                                                            className="h-5 w-5 rounded border-gray-300"
                                                        />
                                                        <span className="text-sm font-medium text-gray-700">
                                                            Out of Stock (10+)
                                                        </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>
                                    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                                        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                                            <span className="text-sm font-medium">
                                                Price
                                            </span>
                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-4 w-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>
                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700">
                                                    The highest price is $600
                                                </span>
                                                <button
                                                    type="button"
                                                    className="text-sm text-gray-900 underline underline-offset-4"
                                                >
                                                    Reset
                                                </button>
                                            </header>
                                            <div className="border-t border-gray-200 p-4">
                                                <div className="flex justify-between gap-4">
                                                    <label
                                                        htmlFor="FilterPriceFrom"
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span className="text-sm text-gray-600">
                                                            $
                                                        </span>
                                                        <input
                                                            type="number"
                                                            id="FilterPriceFrom"
                                                            placeholder="From"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>
                                                    <label
                                                        htmlFor="FilterPriceTo"
                                                        className="flex items-center gap-2"
                                                    >
                                                        <span className="text-sm text-gray-600">
                                                            $
                                                        </span>
                                                        <input
                                                            type="number"
                                                            id="FilterPriceTo"
                                                            placeholder="To"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </details>
                                </div>
                            </div> */}
                        </div>
                        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                            <header className="">
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                                    Product Collection
                                </h2>
                                <p className="mt-4 max-w-md text-gray-500">
                                    Buy and sell your favorite products at the Shopster
                                    Marketplace
                                </p>
                            </header>
                        </div>
                    </div>
                    <div className="p-10">
                        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            {productList.map((product) => (
                                <li key={product._id}>
                                    <Link
                                        to={`/products/${product._id}`}
                                        className="group block overflow-hidden"
                                    >
                                        <img
                                            src={product.image}
                                            alt={`${product.name}`}
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />
                                        <div className="relative bg-white pt-3">
                                            <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                                {product.name}
                                            </h3>
                                            <p className="mt-2">
                                                <span className="sr-only">Regular Price</span>
                                                <span className="tracking-wider text-gray-900">
                                                    ${product.price}
                                                </span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* TODO: map here on pages */}
                    {/* <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
                        <li>
                            <Link className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
                                <span className="sr-only">Prev Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/products?page=1"
                                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                            >
                                1
                            </Link>
                        </li>

                        <li className="block h-8 w-8 rounded border-black bg-black text-center leading-8 text-white">
                            2
                        </li>

                        <li>
                            <Link
                                to="/products?page=3"
                                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                            >
                                3
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/products?page=4"
                                className="block h-8 w-8 rounded border border-gray-100 text-center leading-8"
                            >
                                4
                            </Link>
                        </li>

                        <li>
                            <Link className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100">
                                <span className="sr-only">Next Page</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-3 w-3"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </li>
                    </ol> */}
                </div>
            </section>
        </>
    );
};
