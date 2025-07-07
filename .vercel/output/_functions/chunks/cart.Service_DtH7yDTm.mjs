import { Agent, fetch } from 'undici';

const API_BASE = "https://ecommerce.routemisr.com/";
const agent = new Agent({
  connect: {
    rejectUnauthorized: false
  }
});
async function addProductToCart(productId, token) {
  const res = await fetch(`${API_BASE}api/v1/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token": `${token}`
    },
    body: JSON.stringify({ productId }),
    dispatcher: agent
  });
  return res.json();
}
async function updateProductQty(productId, count, token) {
  const res = await fetch(`${API_BASE}api/v1/cart/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "token": `${token}`
    },
    body: JSON.stringify({ count }),
    dispatcher: agent
  });
  return res.json();
}
async function deleteProductFromCart(productId, token) {
  const res = await fetch(`${API_BASE}api/v1/cart/${productId}`, {
    method: "DELETE",
    headers: {
      "token": `${token}`
    },
    dispatcher: agent
  });
  return res.json();
}
async function getLoggedUserCart(token) {
  const res = await fetch(`${API_BASE}api/v1/cart`, {
    headers: {
      "token": `${token}`
    },
    dispatcher: agent
  });
  return res.json();
}

export { addProductToCart as a, deleteProductFromCart as d, getLoggedUserCart as g, updateProductQty as u };
