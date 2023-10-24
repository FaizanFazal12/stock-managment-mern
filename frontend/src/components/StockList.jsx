import { useEffect, useState } from "react";
import { getAllProduct,Delete } from "../api/internal";
import { Link } from "react-router-dom";



const StockList = () => {
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        async function getAllProducts (){
            const response = await getAllProduct();
            if(response.status===200){
                setStocks(response.data);
            }
        }
        getAllProducts()
        }, [stocks])

        const HandleDelete= async(id)=>{
          const confirmed = window.confirm("Are you sure you want to delete?");
          if (confirmed) {
              await Delete(id);
          }

        }
  return (
    <div className="container mt-4">
      <h2>Stock List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Slug</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map(stock => (
            <tr key={stock._id}>
              <td>{stock.slug}</td>
              <td>${stock.price}</td>
              <td>{stock.quantity}</td>
              <td>

              <Link to={`/update/${stock._id}`} className="btn btn-primary">
  Edit
</Link>
              </td>

              <td> <button className="btn btn-danger" onClick={()=>{HandleDelete(stock._id)}}>Delete</button> </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockList;
