import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const PaginaPadrao = () => {
    return (
        <main>
            <Header />
            <Outlet />
        </main>
    )
}

export default PaginaPadrao;