import '@/styles/globals.css'

import { Navbar } from '../../Components';

 const MyApp = ({ Component, pageProps }) => (
  <div>
  <Navbar />
    <Component {...pageProps} />
  </div>
 );

export default MyApp;
