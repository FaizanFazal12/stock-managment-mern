import { useState } from 'react';
import { createProduct } from '../api/internal';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    slug: '',
    price: '',
    quantity: '',
  });

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
    await createProduct(formData);
    
      alert('Product submitted successfully!');
      setFormData({
        slug: '',
        price: '',
        quantity: '',
      });
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('Error submitting product. Please try again.');
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
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  );
};

export default AddProductForm;
