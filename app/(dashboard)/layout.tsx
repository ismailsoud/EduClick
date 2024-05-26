import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full w-full">
      <div className="h-[80px] fixed inset-y-0 w-full flex justify-center items-center z-50">
        <Navbar />
      </div>
      {/* <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div> */}
      <main className="pt-[80px] h-full w-full lg:px-28 md:px-28">
        {children}
      </main>
    </div>
   );
}
 
export default DashboardLayout;