import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../../components";
import { useCartContext } from "../../context";

export type Product = {
    _id: string;
    name: string;
    inStock: boolean;
    image: string;
    price: number;
    description: string;
};

export type CartProduct = Product & { quantity: number };

export const OneProductView = () => {
    const [cart, setCart] = useCartContext();

    const [product, setProduct] = useState<Product>();
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const { _id } = useParams();

    useEffect(() => {
        axios
            .get<Product>(`http://localhost:8000/api/products/${_id}`)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log(error));
    }, [_id]);

    // FIXME: create a loading component
    if (!product) {
        return <div>Loading...</div>;
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const cartProduct = {
            ...product,
            quantity,
        };

        setCart([...cart, cartProduct]);
        navigate("/cart");
    };

    return (
        <div>
            <Navbar />
            <section>
                <div className="relative mx-auto max-w-screen-xl px-4 py-8">
                    <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                            <img
                                alt="Les Paul"
                                src={product.image}
                                className="aspect-square w-full rounded-xl object-cover"
                            />
                        </div>

                        <div className="sticky top-0">
                            <div className="mt-8 flex justify-between">
                                <div className="max-w-[35ch] space-y-2">
                                    <h1 className="text-xl font-bold sm:text-2xl">
                                        {product.name}
                                    </h1>

                                    <p className="text-sm">
                                        {product.inStock ? "In stock" : "Not in stock"}
                                    </p>

                                    {/* <div className="-ml-0.5 flex">
                                        <svg
                                            className="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            className="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            className="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            className="h-5 w-5 text-yellow-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>

                                        <svg
                                            className="h-5 w-5 text-gray-200"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div> */}
                                </div>

                                <p className="text-lg font-bold">${product.price}</p>
                            </div>

                            <div className="mt-4">
                                <div className="prose max-w-none">
                                    <p>{product.description}</p>
                                </div>

                                {/* <button className="mt-2 text-sm font-medium underline">
                                    Read More
                                </button> */}
                            </div>

                            <form className="mt-8" onSubmit={handleSubmit}>
                                {/* <fieldset>
                                    <legend className="mb-1 text-sm font-medium">
                                        Color
                                    </legend>

                                    <div className="flex flex-wrap gap-1">
                                        <label
                                            htmlFor="color_tt"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="color"
                                                id="color_tt"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                Texas Tea
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="color_fr"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="color"
                                                id="color_fr"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                Fiesta Red
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="color_cb"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="color"
                                                id="color_cb"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                Cobalt Blue
                                            </span>
                                        </label>
                                    </div>
                                </fieldset> */}

                                {/* <fieldset className="mt-4">
                                    <legend className="mb-1 text-sm font-medium">
                                        Size
                                    </legend>

                                    <div className="flex flex-wrap gap-1">
                                        <label
                                            htmlFor="size_xs"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_xs"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                XS
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="size_s"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_s"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                S
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="size_m"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_m"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                M
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="size_l"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_l"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                L
                                            </span>
                                        </label>

                                        <label
                                            htmlFor="size_xl"
                                            className="cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="size"
                                                id="size_xl"
                                                className="peer sr-only"
                                            />

                                            <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                                                XL
                                            </span>
                                        </label>
                                    </div>
                                </fieldset> */}

                                <div className="mt-8 flex gap-4">
                                    <div>
                                        <label htmlFor="quantity" className="sr-only">
                                            Qty
                                        </label>

                                        <input
                                            type="number"
                                            id="quantity"
                                            min="1"
                                            value={quantity}
                                            onChange={(event) =>
                                                setQuantity(event.target.valueAsNumber)
                                            }
                                            className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 disabled:bg-gray-500"
                                        disabled={!product.inStock}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
