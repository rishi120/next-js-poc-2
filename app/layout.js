import './globals.css';
import ModuleWrapper from '@/src/layout/module-wrapper';
import NavMenu from '@/src/components/header/nav-menu';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavMenu />
        <ModuleWrapper>
          {children}
        </ModuleWrapper>
      </body>
    </html>
  )
}
