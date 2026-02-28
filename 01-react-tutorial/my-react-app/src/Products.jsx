import { NavLink, Outlet } from "react-router-dom";

function Products() {
    const navLinkStyles = ({ isActive }) => {
        return {
            color: isActive ? '#007bff' : '#333',
            textDecoration: isActive ? 'none' : 'underline',
            fontWeight: isActive ? 'bold' : 'normal',
            padding: '5px 10px'
        };
    };
    return (
        <>
            <h1>Products Page</h1>
            <nav>
                <NavLink style={navLinkStyles} to='bike'>Bike</NavLink> |{' '}
                <NavLink style={navLinkStyles} to='car'>Car</NavLink>
            </nav>
            <Outlet />
        </>

    );
}

export default Products;