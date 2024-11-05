import Navbar from "@/components/Navbar";
import SearchForm from "@/components/SearchForm";


export default function Home() {
  return (
    <div className="gap-4 hero-bg">
      <div className="hero-text">
      <span className="border-b-2 border-blue-500 text-blue-500">Start</span> and Elevate to New <span className="border-b-2 border-blue-500 text-blue-500">Ups</span>
      </div>
       

      <SearchForm />
    </div>
  );
}
