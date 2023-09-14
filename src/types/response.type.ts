export default interface ResponseType {
  total_count: number;
  incomplete_results: boolean;
  items: {
    name: string;
    full_name: string;
    owner: {
      login: string;
      id: number;
      avatar_url: string;
      gravatar_id: string;
      url: string;
      html_url: string;

      [key: string]: any;
    };
    html_url: string;
    url: string;
    description: string;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    forks_count: number;
    created_at: string;
    updated_at: string;

    [key: string]: any;
  }[];
}
