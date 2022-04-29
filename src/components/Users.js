import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (
      <div>
          <h2>User 1</h2>
          <h2>User 2</h2>
          <h2>User 3</h2>

          <Outlet/>

          <div
            style={{display:"flex",gap:"20px"}}
          >
            <button onClick={()=>setSearchParams({filter:'active'})}>
              Active Users
            </button>
            <button onClick={()=>setSearchParams({})}>
              Reset Filter
            </button>
          </div>
          {
            showActiveUsers?(
              <h2>Showing active users</h2>
            ):(
              <h2>Showing all users</h2>
            )
          }
      </div>
  );
}

export default Users;