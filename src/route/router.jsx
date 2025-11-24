import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Research from "../pages/Research";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/research",
                element: <Research />
            },
            {
                path: "/experience",
                element: <Experience />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    }
]);