import type { Product, ProductRoot } from "../Models/Products";

const API_BASE = 'https://ecommerce.routemisr.com/';

// Browser-compatible caching layer
class BrowserCachingLayer<T> {
  private cache = new Map<string, { data: T; expiry: number }>();
  private defaultTTL: number;

  constructor(ttlSeconds: number = 300) {
    this.defaultTTL = ttlSeconds * 1000; // Convert to milliseconds
  }

  async getOrSet(key: string, fetchFn: () => Promise<T>): Promise<T> {
    const now = Date.now();
    const cached = this.cache.get(key);

    // Return cached data if valid
    if (cached && cached.expiry > now) {
      console.log(`Cache hit for key: ${key}`);
      return cached.data;
    }

    // Fetch new data
    console.log(`Cache miss for key: ${key}, fetching...`);
    try {
      const data = await fetchFn();
      
      // Store in cache
      this.cache.set(key, {
        data,
        expiry: now + this.defaultTTL
      });

      // Clean up expired entries periodically
      this.cleanup();
      
      return data;
    } catch (error) {
      console.error(`Failed to fetch data for key: ${key}`, error);
      throw error;
    }
  }

  private cleanup() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (value.expiry <= now) {
        this.cache.delete(key);
      }
    }
  }

  // Method to clear cache manually
  clear() {
    this.cache.clear();
  }

  // Method to remove specific key
  remove(key: string) {
    this.cache.delete(key);
  }
}

// Initialize caching layer for products
const productsCache = new BrowserCachingLayer<ProductRoot>(300); // 5 minutes cache

// Browser-compatible fetch with error handling
async function fetchWithErrorHandling(url: string, options?: RequestInit): Promise<Response> {
  try {
    console.log(`Fetching: ${url}`);
    
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Add any additional headers your API needs
        ...options?.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }

    return response;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
      throw new Error('Network error: Unable to connect to the API. Please check your internet connection.');
    }
    throw error;
  }
}

export async function getAllProducts(currentPage: number): Promise<ProductRoot> {
  const cacheKey = `products_page_${currentPage}`;
  
  return productsCache.getOrSet(cacheKey, async () => {
    try {
      const response = await fetchWithErrorHandling(
        `${API_BASE}api/v1/products?page=${currentPage}`
      );
      
      const data: ProductRoot = await response.json();
      
      console.log(`Successfully fetched ${data.data?.length || 0} products for page ${currentPage}`);
      return data;
    } catch (error) {
      console.error(`Error fetching products for page ${currentPage}:`, error);
      throw new Error(`Failed to fetch products: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  });
}

export async function getProductById(productId: string): Promise<ProductRoot> {
  const cacheKey = `product_${productId}`;
  
  return productsCache.getOrSet(cacheKey, async () => {
    try {
      const response = await fetchWithErrorHandling(
        `${API_BASE}api/v1/products/${productId}`
      );
      
      const data: ProductRoot = await response.json();
      
      console.log(`Successfully fetched product with ID: ${productId}`);
      return data;
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      throw new Error(`Failed to fetch product: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  });
}

// Additional utility functions for browser environment

// Function to clear all cached products
export function clearProductsCache(): void {
  productsCache.clear();
  console.log('Products cache cleared');
}

// Function to remove specific cached page
export function clearProductsPageCache(page: number): void {
  productsCache.remove(`products_page_${page}`);
  console.log(`Cache cleared for products page ${page}`);
}

// Function to remove specific cached product
export function clearProductCache(productId: string): void {
  productsCache.remove(`product_${productId}`);
  console.log(`Cache cleared for product ${productId}`);
}

// Function to check if data is cached
export function isProductsPageCached(page: number): boolean {
  return productsCache['cache'].has(`products_page_${page}`);
}

// Function to prefetch next page (useful for pagination)
export async function prefetchProductsPage(page: number): Promise<void> {
  try {
    console.log(`Prefetching products page ${page}...`);
    await getAllProducts(page);
    console.log(`Successfully prefetched products page ${page}`);
  } catch (error) {
    console.warn(`Failed to prefetch products page ${page}:`, error);
  }
}

export default {
  getAllProducts,
  getProductById,
  clearProductsCache,
  clearProductsPageCache,
  clearProductCache,
  isProductsPageCached,
  prefetchProductsPage,
};