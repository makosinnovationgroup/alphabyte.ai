import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names with Tailwind conflict resolution.
 *
 * Accepts the same inputs as clsx (strings, arrays, objects with
 * boolean values) and passes the result through tailwind-merge so
 * later classes override earlier ones when they target the same
 * Tailwind property.
 *
 * @example
 *   cn("px-4 py-2", condition && "px-6", className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
