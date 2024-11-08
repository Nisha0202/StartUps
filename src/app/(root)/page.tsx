
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { StartupCardType } from "@/types/StartupCardType";


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {

  const posts: StartupCardType[] = [
    {
      _createdAt: new Date(), 
      views: 55,
      author: {
        _id: 11,
        name: 'John Deo'
      },
      _id: "1", 
      description: "This is a description",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(), 
      views: 42,
      author: {
        _id: 12,
        name: 'Kora Se'
      },
      _id: "2", 
      description: "Exploring the future of robotics.",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "Technology",
      title: "The Future of Tech",
    },
    {
      _createdAt: new Date(), 
      views: 88,
      author: {
        _id: 13, 
        name: 'Sweo Xu'
      },
      _id: "3", // Changed id to _id and use string type
      description: "A deep dive into AI advancements.",
      image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=80&w=2940&auto=format&fit=crop&ixlib-rb-4.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHxBfGVufDB8FHxBfA%3D%3D",
      category: "AI",
      title: "Advancements in AI",
    },
  ];
  






  const query = (await searchParams).query;
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
        <StartupCard key={post._id} post={post}/>
      ))
    ) : (
      <div>No Posts.</div>
    )}
  </div>
   



      </section>

    </div>
  );
}
