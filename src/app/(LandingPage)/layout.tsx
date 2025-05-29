import Navbar from "@/app/ui/NavBar/Navbar";
import Footer from "@/app/ui/footer/footer";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="inset-0 bg-white/50 h-full">
    <Navbar />
{children}
    <Footer />
</div>
}