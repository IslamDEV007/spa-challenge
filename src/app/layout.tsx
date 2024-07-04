import './global.css'

/**
 * RootLayout component to define the global structure of the application.
 * RootLayoutコンポーネントは、アプリケーションのグローバルな構造を定義します。
 *
 * @param {React.ReactNode} children - The child elements to be rendered within the layout.
 *                                    レイアウト内でレンダリングされる子要素。
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}