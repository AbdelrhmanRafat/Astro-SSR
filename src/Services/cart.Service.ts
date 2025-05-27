import { fetch, Agent } from 'undici';

const API_BASE = 'https://ecommerce.routemisr.com/';

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

export async function addProductToCart(productId: string, token: string): Promise<any> {
  const res = await fetch(`${API_BASE}api/v1/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'token': `${token}`,
    },
    body: JSON.stringify({ productId }),
    dispatcher: agent,
  });
  return res.json();
}

export async function updateProductQty(productId: string, count: number, token: string): Promise<any> {
  const res = await fetch(`${API_BASE}api/v1/cart/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'token': `${token}`,
    },
    body: JSON.stringify({ count }),
    dispatcher: agent,
  });
  return res.json();
}

export async function deleteProductFromCart(productId: string, token: string): Promise<any> {
  const res = await fetch(`${API_BASE}api/v1/cart/${productId}`, {
    method: 'DELETE',
    headers: {
      'token': `${token}`,
    },
    dispatcher: agent,
  });
  return res.json();
}

export async function clearProductsFromCart(token: string): Promise<any> {
  const res = await fetch(`${API_BASE}api/v1/cart`, {
    method: 'DELETE',
    headers: {
      'token': `${token}`,
    },
    dispatcher: agent,
  });
  return res.json();
}

export async function getLoggedUserCart(token: string): Promise<any> {
  const res = await fetch(`${API_BASE}api/v1/cart`, {
    headers: {
      'token': `${token}`,
    },
    dispatcher: agent,
  });
  return res.json();
}
