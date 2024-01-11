import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LayoutProps } from "@/constrants/layout";

export function MainLayout({ children }: LayoutProps) {
  return (
    <main className="flex flex-col min-h-screen p-12">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
