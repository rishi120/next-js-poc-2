import '../globals.css';
import ModuleWrapper from '@/src/layout/module-wrapper';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ModuleWrapper>
          {children}
        </ModuleWrapper>
      </body>
    </html>
  )
}
