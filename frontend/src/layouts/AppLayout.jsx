import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_PATHS } from "../utils/apiPaths";
import axios from "axios";
import { setUserInfo, clearUserInfo } from "../redux/userSlice";

function AppLayout() {

    const dispatch = useDispatch();

    async function fetchUser() {
        try {
            const response = await axios.get(API_PATHS.AUTH.GET_USER);

            if (response.ok) {
                const data = await response.data;
                dispatch(setUserInfo(data));
            } else {
                dispatch(clearUserInfo());
                console.error("Failed to fetch user data");
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
            dispatch(clearUserInfo());
        }
    }

        useEffect(() => {
            fetchUser();
        }, []);

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

export default AppLayout;