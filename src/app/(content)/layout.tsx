import Navbar from "@/app/ui/NavBar/Navbar";
import PageWrap from "@/app/ui/pageWrap/pageWrap";


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
    </div>
}