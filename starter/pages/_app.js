import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ChakraProvider } from '@chakra-ui/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
      </ChakraProvider>
    </>
  );
}
