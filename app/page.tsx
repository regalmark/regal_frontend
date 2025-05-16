import Footer from "@/components/menu/footer";
import Header from "@/components/menu/header";
import Link from "next/link";

export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
   
      <Header />

      <main className="flex-grow bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-800">Discover Your Style</h1>
          <p className="text-lg text-gray-600 mb-6">Bold, Urban, Unapologetic – Welcome to Regal Mark.</p>
          <Link href="/shop">
            <span className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition">Shop Now</span>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
