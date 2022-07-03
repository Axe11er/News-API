export default interface Article {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    source: { name: string; id: string };
    description: string;
    url: string;
}
