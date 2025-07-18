import { clsx } from "clsx";
import type { ClassValue } from "clsx/dist/types";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
