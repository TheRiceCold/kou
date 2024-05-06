import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

export const range = (start, end) => {
  const arr = []

  for (let i = start; i <= end; i += 1)
    arr.push(i)

  return arr
}
