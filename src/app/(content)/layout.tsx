import Navbar from "@/app/ui/NavBar/Navbar";
import PageWrap from "@/app/ui/pageWrap/pageWrap";
import Footer from "@/app/ui/footer/footer"


export default function ContentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>
                <Navbar/>
            <PageWrap>
    {children}
            </PageWrap>
            <Footer />
    </div>
}