import Navbar from "@/app/ui/NavBar/Navbar";

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="absolute inset-0 bg-white/80">
    <Navbar />
{children}</div>
}