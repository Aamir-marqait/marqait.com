import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Padding = header height + the 36px TruIntel pause bar */}
      <main className="flex-1 bg-[#020103] pt-[100px] lg:pt-[116px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
