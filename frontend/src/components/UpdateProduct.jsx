import  { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, UpdateProduct } from '../api/internal'; // Assuming you have axios imported in the internal file

const UpdateProductForm = () => {

    const navigate=useNavigate();
    const { id } = useParams();
    const [formData, setFormData] = useState({
        slug: '',
        price: '',
        quantity: '',
    });

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await getProductById(id);
                console.log(response)
                if (response.status === 200) {
                    setFormData(response.data);
                }
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        }
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // console.log(await UpdateProduct(id, formData));
         const response=   await UpdateProduct(id, formData);
     if(response.status === 200) {
        navigate("/");
     }
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Error updating product. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-5 container">
            <div className="mb-3">
                <label htmlFor="slug" className="form-label">Name:</label>
                <input
                    type="text"
                    id="slug"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className="form-control"
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Update Product</button>
        </form>
    );
};

export default UpdateProductForm;
