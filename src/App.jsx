import "./style/reset.scss";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Cursor from "./libs/FramerMotion/inde";

function App() {
    return (
        <>
            <Cursor />
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
