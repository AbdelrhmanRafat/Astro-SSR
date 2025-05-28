import type { Product, ProductRoot } from "../Models/Products";
import { fetch, Agent } from 'undici';
import { CachingLayer } from "../lib/CachingLayer";

const API_BASE = 'https://ecommerce.routemisr.com/';

const agent = new Agent({
  connect: {
    rejectUnauthorized: false,
  },
});

// Initialize caching layer for products
const productsCache = new CachingLayer<ProductRoot>(300); // 5 minutes cache

export async function getAllProducts(currentPage: number): Promise<ProductRoot> {
  const cacheKey = `products_page_${currentPage}`;
  
  return productsCache.getOrSet(cacheKey, async () => {
    const res: any = await fetch(`${API_BASE}api/v1/products?page=${currentPage}`, {
      dispatcher: agent,
    });
    return res.json();
  });
}

export async function getProductById(productId: string): Promise<ProductRoot> {
  const cacheKey = `product_${productId}`;
  
  return productsCache.getOrSet(cacheKey, async () => {
    const res: any = await fetch(`${API_BASE}api/v1/products/${productId}`, {
      dispatcher: agent,
    });
    return res.json();
  });
}