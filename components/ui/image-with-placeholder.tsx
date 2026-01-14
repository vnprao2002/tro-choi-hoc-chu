"use client"

import { useState } from "react"

interface ImageWithPlaceholderProps {
  src?: string
  alt: string
  /** Class áp dụng cho thẻ img bên trong */
  className?: string
  /** Class bổ sung cho wrapper, giữ nguyên tỉ lệ hình vuông của container cha */
  containerClassName?: string
}

/**
 * Component ảnh có placeholder hình vuông.
 * - Hiện placeholder khi chưa có src, đang load hoặc load lỗi.
 * - Khi ảnh load xong sẽ fade-in, placeholder mờ dần.
 */
export default function ImageWithPlaceholder({
  src,
  alt,
  className = "",
  containerClassName = "",
}: ImageWithPlaceholderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const showPlaceholder = !src || !isLoaded || hasError

  return (
    <div
      className={`relative w-full h-full ${containerClassName}`}
    >
      {showPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
          <span className="text-3xl font-bold select-none">?</span>
        </div>
      )}

      {src && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  )
}


