import axios from 'axios';

export async function loginUser(data) {
  try {
    const response = await axios.post('http://localhost:8000/api/users/login', data, {
      withCredentials: true
    });

    return response;
  } catch (error) {
  return error

  }
}
export async function createProduct(data) {
  try {
    const response = await axios.post('http://localhost:8000/stocks', data, {
      withCredentials: true
    });

    return response;
  } catch (error) {
return error

  }
}
export async function autoLogin() {
  try {
    const response = await axios.get('http://localhost:8000/api/users/auto-login', {
      withCredentials: true
    });

    return response;
  } catch (error) {
 
return error
  }
}
export async function Logout() {
  try {
    const response = await axios.delete('http://localhost:8000/api/users/logout', {
      withCredentials: true
    });

    return response;
  } catch (error) {
 return error   

  }
}
export async function getAllProduct() {
  try {
    const response = await axios.get('http://localhost:8000/stocks', {
      withCredentials: true
    });

    return response;
  } catch (error) {
 return error   

  }
}
export async function UpdateProduct(id,data) {
  try {
    const response = await axios.put(`http://localhost:8000/stocks/${id}`,data,{
      withCredentials: true
    });

    return response;
  } catch (error) {
 return error   

  }
}
export async function getProductById(id) {
  try {
    const response = await axios.get(`http://localhost:8000/stocks/${id}`,{
      withCredentials: true
    });

    return response;
  } catch (error) {
 return error   

  }
}
export async function Delete(id) {
  try {
    const response = await axios.delete(`http://localhost:8000/stocks/${id}`,{
      withCredentials: true
    });

    return response;
  } catch (error) {
 return error   

  }
}
