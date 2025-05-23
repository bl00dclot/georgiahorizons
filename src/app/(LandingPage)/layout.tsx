import Navbar from "@/app/ui/NavBar/Navbar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
    <Navbar />
            <div className="w-[110px] bg-amber-500 h-[500px]"></div>
{children}</div>
}