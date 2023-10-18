import './globals.css'
import { Inter } from 'next/font/google'
import {store} from "../redux/store"
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo',
  description: 'Created todo app using next js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
