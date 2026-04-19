import Sidebar from "../components/ui/Sidebar";

export default function ReadQuranLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#090909] text-white flex flex-col lg:flex-row">
      <Sidebar />
      <main className="min-w-0 flex-1 w-full lg:w-auto">{children}</main>
    </div>
  );
}
// }