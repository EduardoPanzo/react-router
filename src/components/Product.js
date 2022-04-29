import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
    <div style={{margin:"20px"}}>
        <input type='search' placeholder="Search products" />
    </div>
    <nav>
        <Link to='featured '>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <hr/>
    <Outlet />
    </>
  );
}

export default Products;