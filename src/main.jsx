import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/globalStyle.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import ProjetosPage from "./pages/Projetos/index.jsx";
import Error from "./pages/ErrorPage/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/projetos",
                element: <ProjetosPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
