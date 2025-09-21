import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const template_id=process.env.TEMPLATE_ID;
export const service_id=process.env.SERVICE_ID;
export const public_key=process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
