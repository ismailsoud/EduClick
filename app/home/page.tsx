import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Layout from "./components/Layout/Layout";
import { CoursesList } from "@/components/courses-list";


function Home() {
  return (
    <>
      <Layout>
        <Hero />
        {/* <CoursesList/> */}
      </Layout>
    </>

  )
}

export default Home