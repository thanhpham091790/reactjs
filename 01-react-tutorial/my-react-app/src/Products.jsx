import { Link, Outlet } from "react-router-dom";

function Products() {
    return (
        <>
            <h1>Products Page</h1>
            <nav>
                <Link to='bike'>Bike</Link> |{' '}
                <Link to='car'>Car</Link>
            </nav>
            <Outlet />
        </>

    );
}

export default Products;