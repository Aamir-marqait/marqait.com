import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  onOpenWaitlist?: () => void;
}

const Layout = ({ children, onOpenWaitlist }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onOpenWaitlist={onOpenWaitlist} />
      <main className="flex-1 bg-[#020103] pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
