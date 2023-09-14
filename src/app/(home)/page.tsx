import Pagination from "@/components/pagination";
import RepoCard from "@/components/repo-card";
import ResponseType from "@/types/response.type";

async function fetchRepo({
  topic = "ai",
  sort = "stars",
  page = "1",
  order = "desc",
}) {
  const baseUrl = new URL("https://api.github.com/search/repositories");
  const query = new URLSearchParams({
    q: "topic:" + topic,
    sort,
    order,
    per_page: "30",
    page,
  });

  const res = await fetch(baseUrl + "?" + query.toString());
  const data: ResponseType = await res.json();
  return data;
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const data = await fetchRepo({
    topic: searchParams.topic,
    sort: searchParams.sort,
    page: searchParams.page,
    order: searchParams.order,
  });

  const totalPage = Math.ceil(data.total_count / 30);

  return (
    <section>
      <h2 className="text-xl text-muted-foreground py-2">
        {data.total_count} repositories found
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.items.map((each, i) => (
          <RepoCard
            key={i}
            title={each.name}
            description={each.description}
            url={each.html_url}
            stars={each.stargazers_count}
            forks={each.forks_count}
            language={each.language}
          />
        ))}
      </div>
      <Pagination total={totalPage} current={Number(searchParams.page) ?? 1} />
    </section>
  );
}
