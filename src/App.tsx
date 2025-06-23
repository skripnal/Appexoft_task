import Header from "./components/Header";
import MediaCard from "./components/MediaCard";
import { useGetAccountsQuery } from "./service/socialMediaApi";

function App() {
  const { data, isLoading, error } = useGetAccountsQuery({});

  if (error) return <h2>Error</h2>;

  if (isLoading) return <h2>Loading...</h2>;
  console.log(data);
  return (
    <div>
      <Header />
      <div className="container my-3">
        <div className="row gx-2 gy-2">
          {data?.map((account: any) => (
            <div key={account.id} className="col-lg-6 col-md-12">
              <MediaCard account={account} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
