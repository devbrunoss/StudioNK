import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        import { Analytics } from "@vercel/analytics/next"
      </body>
    </html>
  )
}
