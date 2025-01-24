'use client';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.scss';
import Header from '../components/header';
import Footer from '@/components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className='container'>
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}