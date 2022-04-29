import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{marginTop:"40px",fontSize:"20pt"}}
      >Home Page</div>

      <button 
        style={{marginTop:"150px",marginLeft:"50%"}}
        onClick={()=>navigate('order-summary')}
        >Place order</button>
    </>
  );
}

export default Home;