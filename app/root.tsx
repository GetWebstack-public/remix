import { Outlet } from '@remix-run/react'

export default function App() {
  return (
    <html>
      <head><title>Remix</title></head>
      <body><Outlet /></body>
    </html>
  )
}
