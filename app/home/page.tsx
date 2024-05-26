import Feature from "./components/Feature";
import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Layout from "./components/Layout/Layout";


function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <Feature />
        {/* <Pricing /> */}
      </Layout>
    </>

  )
}

export default Home