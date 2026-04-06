import {Outlet} from "react-router-dom";
import {Navbar, Footer} from "../components";

function AppLayout() {


    return (
        <div className="w-full h-screen flex">
            <div className="w-full flex flex-col bg-primary-dark">
                <Navbar />
                <main className="w-full">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default AppLayout