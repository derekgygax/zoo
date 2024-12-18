// types
import { FORM_SCHEMA, FormConfig } from "@/types/form";

// This is a global cache that will be used across the project
// to store info to prevent repeat requests
// It mostly will save the metadata retrieved for forms for now
export class GlobalCache {
  private static cache: Map<string, { value: FormConfig; expiresAt: number }> = new Map();

  // Input
  //    key = key for the item
  //    value = value for the item
  //    timeToLive = how long before the item is deleted (passed back in seconds)
  static setCache = (key: FORM_SCHEMA, value: FormConfig, timeToLive: number = 600) => {
    const expiresAt = Date.now() + timeToLive * 1000;
    this.cache.set(key, { value, expiresAt });
  };

  static getCache = (key: FORM_SCHEMA): FormConfig | undefined => {
    const item = this.cache.get(key);
    if (!item) {
      return undefined
    };

    // This is an extra delete that does NOT need to be here with the periodic clean up
    if (Date.now() > item.expiresAt) {
      this.cache.delete(key);
      return undefined;
    }

    return item.value;
  };

  static deleteCache = (key: FORM_SCHEMA) => {
    this.cache.delete(key);
  };

  // Cleanup function to remove expired items
  static cleanupCache = () => {
    const now = Date.now();
    for (const [key, { expiresAt }] of this.cache.entries()) {
      if (expiresAt <= now) {
        this.cache.delete(key);
      }
    }
  };

}


// Run cleanup periodically
// Every 5 minutes
setInterval(GlobalCache.cleanupCache, 300 * 1000);
