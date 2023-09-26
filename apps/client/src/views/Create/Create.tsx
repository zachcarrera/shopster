import React, { useState } from "react";
import axios from "axios";
import { Navbar } from "../../components";
import { useNavigate, Link } from "react-router-dom";

export const Create = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [inStock, setInStock] = useState(false);
    const [image, setImage] = useState("");

    const navigate = useNavigate();

    const [errorList, setErrorList] = useState<string[]>([]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios
            .post(`http://localhost:8000/api/products/new`, {
                name,
                description,
                price,
                inStock,
                image,
            })
            .then((res) => {
                const createdProduct = res.data;
                // view one page
                navigate(`/products/${createdProduct._id}`);
            })
            .catch((error) => {
                const errorRespondData = error.response.data.errors;
                const tempErrorArray = [];
                for (const eachKey in errorRespondData) {
                    tempErrorArray.push(errorRespondData[eachKey].message);
                }
                setErrorList(tempErrorArray);
            });
    };

    return (
        <>
            <Navbar />
            <div className="my-4">
                <h2 className="text-center text-xl mb-5">
                    Add a product to the Shopster marketplace
                </h2>
                <form className="form max-w-md mx-auto" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-bold">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            className="border rounded w-full py-2 px-3"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">Description:</label>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            className="border rounded w-full py-2 px-3"
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">Image URL:</label>
                        <input
                            type="text"
                            name="image"
                            value={image}
                            className="border rounded w-full py-2 px-3"
                            onChange={(event) => setImage(event.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">Price:</label>
                        <input
                            type="number"
                            name="price"
                            value={price}
                            className="border rounded w-full py-2 px-3"
                            onChange={(event) => setPrice(event.target.valueAsNumber)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-bold">In Stock:</label>
                        <input
                            type="checkbox"
                            name="inStock"
                            className="w-4 h-4 rounded border"
                            checked={inStock}
                            onChange={(event) => setInStock(event.target.checked)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                        type="submit"
                    >
                        Submit
                    </button>
                    <Link
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        to="/"
                    >
                        Cancel
                    </Link>
                    {errorList.map((eachError, idx) => (
                        <p className="text-red-500" key={idx}>
                            {eachError}
                        </p>
                    ))}
                </form>
            </div>
        </>
    );
};
