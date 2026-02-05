import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

function upsertMeta({ selector, attrs }) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => {
    el.setAttribute(k, v)
  })
}

function upsertLink({ selector, attrs }) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    document.head.appendChild(el)
  }
  Object.entries(attrs).forEach(([k, v]) => {
    el.setAttribute(k, v)
  })
}

export function Seo({
  title,
  description,
  robots = 'index,follow',
  ogType = 'website',
}) {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title ? `${title} | Just Hii` : 'Just Hii'
    document.title = fullTitle
    const imageUrl = new URL(logo, window.location.origin).href

    if (description) {
      upsertMeta({
        selector: 'meta[name="description"]',
        attrs: { name: 'description', content: description },
      })
    }

    upsertMeta({
      selector: 'meta[name="robots"]',
      attrs: { name: 'robots', content: robots },
    })

    upsertMeta({
      selector: 'meta[property="og:title"]',
      attrs: { property: 'og:title', content: fullTitle },
    })
    upsertMeta({
      selector: 'meta[property="og:description"]',
      attrs: { property: 'og:description', content: description || '' },
    })
    upsertMeta({
      selector: 'meta[property="og:type"]',
      attrs: { property: 'og:type', content: ogType },
    })
    upsertMeta({
      selector: 'meta[property="og:image"]',
      attrs: { property: 'og:image', content: imageUrl },
    })

    upsertMeta({
      selector: 'meta[name="twitter:card"]',
      attrs: { name: 'twitter:card', content: 'summary_large_image' },
    })
    upsertMeta({
      selector: 'meta[name="twitter:title"]',
      attrs: { name: 'twitter:title', content: fullTitle },
    })
    upsertMeta({
      selector: 'meta[name="twitter:description"]',
      attrs: { name: 'twitter:description', content: description || '' },
    })
    upsertMeta({
      selector: 'meta[name="twitter:image"]',
      attrs: { name: 'twitter:image', content: imageUrl },
    })

    const canonical = `${window.location.origin}${location.pathname}`
    upsertLink({
      selector: 'link[rel="canonical"]',
      attrs: { rel: 'canonical', href: canonical },
    })
  }, [title, description, robots, ogType, location.pathname])

  return null
}


