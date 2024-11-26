
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/types/StartupCardType";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  let posts: StartupCardType[] = [];

  const query = (await searchParams).query;

  try {
    const response = await fetch(
      query
        ? `http://localhost:3000/api/get-ideas?query=${encodeURIComponent(query)}`
        : "http://localhost:3000/api/get-ideas",
      { cache: "no-store" } // Disable caching
    );
  
    if (!response.ok) {
      throw new Error(`Failed to fetch ideas: ${response.statusText}`);
    }
  
    const data = await response.json();
    posts = data.startups || []; // Access the startups array
  } catch (error) {
    console.error("Error fetching posts:", error);
    posts = []; // Fallback to an empty array
  }
  

  return (

    <div className="">
      <section className="gap-5 hero-bg relative">
        <div className="hero-text">
          <span className=" text-primary">Start</span> and Elevate to New <span className=" text-primary">Ups</span>
        </div>
        <SearchForm query={query} />
      </section>


      <section>
        <div className="text-center mt-12 sm:mt-24 text-xl font-bold">
          {query ? `Startups matches ''${query}''` : 'All Startups'}
        </div>

        <div className="card_grid my-8">
          {posts.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <div>No Posts.</div>
          )}
        </div>

      </section>

    </div>
  );
}
