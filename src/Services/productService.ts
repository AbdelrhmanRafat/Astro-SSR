import type { Product, ProductRoot } from "../Models/Products";
import { fetch, Agent } from 'undici';

const API_BASE = 'https://ecommerce.routemisr.com/';

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

export async function getAllProducts(currentPage: number): Promise<ProductRoot> {
  const res : any = await fetch(`${API_BASE}api/v1/products?page=${currentPage}`, {
    dispatcher: agent,
  });
  return res.json();
}

export async function getProductById(productId: string): Promise<ProductRoot> {
  const res : any = await fetch(`${API_BASE}api/v1/products/${productId}`, {
    dispatcher: agent,
  });
  return res.json();
}