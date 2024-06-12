import Pricing from "./components/Pricing";
import Hero from "./components/Hero";
import Layout from "./components/Layout/Layout";
import { getAllCourses } from "@/actions/get-cousesNoAuth";
import Link from "next/link";

async function Home() {
  const courses = await getAllCourses();
  return (
    <>
      <Layout>
        <Hero />
        <div  className="flex justify-center items-center mb-10">
          <p className="text-6xl font-bold">Les cours disponible:</p>
        </div>
        <div className="flex space-x-10 px-32 space-y-4">
          {courses.map((item, index) => (
            <Link
              href={"/"}
              key={index}
              className="border-2 border-slate-400 flex flex-col rounded-lg px-5 py-5 w-1/3"
            >
              <div className="flex justify-center items-center">
                <img
                  className="w-52 border-2 rounded-lg border-slate-400"
                  src={item.imageUrl}
                  alt="cours"
                />
              </div>
              <p className="text-lg font-bold mt-5">{item.title}</p>
              <p className="line-clamp-2">{item.description}</p>
              <p>{item.price} DHs</p>
            </Link>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Home;