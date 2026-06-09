/// <reference types="vite/client" />

// Extend React's img attributes to include fetchPriority (supported by modern browsers)
import 'react'

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto'
  }
}
