
import SearchForm from "@/components/SearchForm";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  return (
    <div className="">
      <section className="gap-6 hero-bg">
           <div className="hero-text">
        <span className="border-b-2 border-primary  text-primary">Start</span> and Elevate to New <span className="border-b-2 border-primary text-primary">Ups</span>
      </div>
     <SearchForm query={query} />  
      </section>
      
   

     


      <section>
        <div className="text-center mt-12 text-xl font-bold">
          {query? `Startups matches '${query}'` : 'All Startups'}
        </div>

      </section>

    </div>
  );
}
