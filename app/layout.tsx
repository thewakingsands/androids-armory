import { AaRootLayout } from '../components/aa-root-layout'
import './global.css'
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hans">
      <body>
        <Providers>
          <AaRootLayout>{children}</AaRootLayout>
        </Providers>
      </body>
    </html>
  )
}
