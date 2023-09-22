import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context";

export const Navbar = () => {
    const context = useContext(CartContext);
    if (!context) {
        return;
    }
    const [cart] = context;

    return (
        <nav className="border-b p-4 border-gray-500 flex justify-center gap-12">
            <Link
                to="/products/new"
                className="border px-4 py-2 shadow-sm bg-white hover:bg-gray-50 rounded-md"
            >
                Add a Product
            </Link>
            {/* Logo */}
            <Link to="/">
                <div className="flex items-center gap-5">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            transform: "scale(1.5)",
                        }}
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 fill-green-600 stroke-blue-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                        />
                    </svg>

                    <h1 className="text-3xl">Shopster</h1>
                </div>
            </Link>
            <Link
                to="/cart"
                className="border px-4 py-2 shadow-sm bg-white hover:bg-gray-50 rounded-md flex items-center gap-2 relative"
            >
                <svg
                    className="h-4 inline text-gray-500"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="far"
                    data-icon="shopping-cart"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                >
                    <path
                        fill="currentColor"
                        d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                    ></path>
                </svg>
                Cart
                {cart.length > 0 && (
                    <span className="text-xs text-white w-6 h-6 bg-stone-700 inline-flex justify-center items-center rounded-full font-semibold absolute -top-3 -right-3">
                        {cart.length}
                    </span>
                )}
            </Link>
        </nav>
    );
};
