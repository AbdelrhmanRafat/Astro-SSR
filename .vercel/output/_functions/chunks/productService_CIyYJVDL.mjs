const API_BASE = "https://ecommerce.routemisr.com/";
class BrowserCachingLayer {
  cache = /* @__PURE__ */ new Map();
  defaultTTL;
  constructor(ttlSeconds = 300) {
    this.defaultTTL = ttlSeconds * 1e3;
  }
  async getOrSet(key, fetchFn) {
    const now = Date.now();
    const cached = this.cache.get(key);
    if (cached && cached.expiry > now) {
      console.log(`Cache hit for key: ${key}`);
      return cached.data;
    }
    console.log(`Cache miss for key: ${key}, fetching...`);
    try {
      const data = await fetchFn();
      this.cache.set(key, {
        data,
        expiry: now + this.defaultTTL
      });
      this.cleanup();
      return data;
    } catch (error) {
      console.error(`Failed to fetch data for key: ${key}`, error);
      throw error;
    }
  }
  cleanup() {
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
  remove(key) {
    this.cache.delete(key);
  }
}
const productsCache = new BrowserCachingLayer(300);
async function fetchWithErrorHandling(url, options) {
  try {
    console.log(`Fetching: ${url}`);
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // Add any additional headers your API needs
        ...options?.headers
      }
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    return response;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
      throw new Error("Network error: Unable to connect to the API. Please check your internet connection.");
    }
    throw error;
  }
}
async function getAllProducts(currentPage) {
  const cacheKey = `products_page_${currentPage}`;
  return productsCache.getOrSet(cacheKey, async () => {
    try {
      const response = await fetchWithErrorHandling(
        `${API_BASE}api/v1/products?page=${currentPage}`
      );
      const data = await response.json();
      console.log(`Successfully fetched ${data.data?.length || 0} products for page ${currentPage}`);
      return data;
    } catch (error) {
      console.error(`Error fetching products for page ${currentPage}:`, error);
      throw new Error(`Failed to fetch products: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  });
}
async function getProductById(productId) {
  const cacheKey = `product_${productId}`;
  return productsCache.getOrSet(cacheKey, async () => {
    try {
      const response = await fetchWithErrorHandling(
        `${API_BASE}api/v1/products/${productId}`
      );
      const data = await response.json();
      console.log(`Successfully fetched product with ID: ${productId}`);
      return data;
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      throw new Error(`Failed to fetch product: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  });
}

export { getAllProducts as a, getProductById as g };
