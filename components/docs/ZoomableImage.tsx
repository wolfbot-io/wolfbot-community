'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Maximize2, X } from 'lucide-react'

interface ZoomableImageProps {
  src?: string
  alt?: string
  title?: string
}

export function ZoomableImage({ src, alt = '', title }: ZoomableImageProps) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogTitleId = useId()

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [open])

  if (!src) return null

  const accessibleName = alt || title || 'Documentation screenshot'

  return (
    <figure className="my-6">
      <button
        ref={triggerRef}
        type="button"
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-lg border border-wolf-border bg-wolf-surface text-left"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge image: ${accessibleName}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="m-0 h-auto w-full rounded-none border-0" />
        <span className="absolute bottom-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 bg-black/75 text-white opacity-90 shadow-lg transition group-hover:bg-black group-focus-visible:bg-black" aria-hidden="true">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>
      {title && <figcaption className="mt-2 text-center text-sm text-wolf-text3">{title}</figcaption>}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogTitleId}
          onKeyDown={(event) => {
            if (event.key === 'Tab') {
              event.preventDefault()
              closeRef.current?.focus()
            }
          }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <span id={dialogTitleId} className="sr-only">{accessibleName}</span>
          <button
            ref={closeRef}
            type="button"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-black/80 text-white hover:bg-black sm:right-6 sm:top-6"
            onClick={() => setOpen(false)}
            aria-label="Close enlarged image"
          >
            <X className="h-6 w-6" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="max-h-[88vh] max-w-[96vw] object-contain shadow-2xl" />
        </div>
      )}
    </figure>
  )
}
