import React from "react";

const Nav = () => {
    return (
        <nav className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/Calculadora" className="hover:text-gray-200">
                            Calculadora
                        </a>
                    </li>
                    <li>
                        <a href="/Todo" className="hover:text-gray-200">
                            Todo
                        </a>
                    </li>
                    <li>
                        <a href="/Registro" className="hover:text-gray-200">
                            Estudiantes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;