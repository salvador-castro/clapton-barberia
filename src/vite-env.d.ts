/// <reference types="vite/client" />

// Extend React's img attributes to include fetchPriority (supported by modern browsers)
import 'react'

declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ImgHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto'
  }
}
