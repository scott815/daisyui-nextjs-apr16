import Head from 'next/head';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div class="container mx-auto">
      <NavBar />
      <Footer />
    </div>
  );
}
