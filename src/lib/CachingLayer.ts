export class CachingLayer<T> {
  private cache: Map<string, { data: T; timestamp: number }>;
  private readonly cacheDuration: number;

  constructor(cacheDurationInSeconds: number = 300) {
    this.cache = new Map();
    this.cacheDuration = cacheDurationInSeconds * 1000; // Convert to milliseconds
  }

  async getOrSet(key: string, fetchFn: () => Promise<T>): Promise<T> {
    const now = Date.now();
    const cachedData = this.cache.get(key);

    // Return cached data if it exists and is not expired
    if (cachedData && (now - cachedData.timestamp) < this.cacheDuration) {
      return cachedData.data;
    }

    // Fetch new data if no cache or expired
    const data = await fetchFn();
    
    // Store in cache
    this.cache.set(key, {
      data,
      timestamp: now
    });

    return data;
  }

  // Method to manually clear cache for a specific key
  clearCache(key: string): void {
    this.cache.delete(key);
  }

  // Method to clear all cache
  clearAllCache(): void {
    this.cache.clear();
  }

  // Method to check if a key exists in cache and is valid
  hasValidCache(key: string): boolean {
    const cachedData = this.cache.get(key);
    if (!cachedData) return false;
    
    return (Date.now() - cachedData.timestamp) < this.cacheDuration;
  }
} 