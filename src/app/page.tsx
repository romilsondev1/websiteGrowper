import Image from 'next/image'
import large from '../app/styles/large.module.css'
import small from '../app/styles/small.module.css'
import medium from '../app/styles/medium.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head'
import Nav from '../components/Nav'
import Top from '../components/Top'
import SecoundContainer from '@/components/SecoundContainer';
import TrueContainer from '@/components/TrueContainer';
import FuorCountainer from '@/components/FuorContainer';
import FiveContainer from '@/components/FiveCountainer';
import SixCountainer from '@/components/SixCountainer';
import SevenContainer from '@/components/SevenContainer';
import EightContainer from '@/components/EightContainer';
import Footer from '@/components/Footer';
import Footer2 from '@/components/footer/Footer2'

export default function Home() {
  return (
    <main className={large.main}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Top/>
      <SecoundContainer />
      <TrueContainer />
      <FuorCountainer/>
      <FiveContainer />
      <SixCountainer/>
      <SevenContainer/>
      <EightContainer/>
      <Footer2/>
    </main>
  )
}
