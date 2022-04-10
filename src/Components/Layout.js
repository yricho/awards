import React from "react";
import { Footer, Nav } from "./common";

const Layout = ({ children }) => {
    return (
        <div className="bg-elephant">
            <Nav>
                <h1 className='uppercase text-center text-4xl bg-elephant shadow py-4'>
                    Awards {new Date().getFullYear()}
                </h1>
            </Nav>
            <main className="main-content max-w-screen-lg mx-4 lg:mx-auto">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;