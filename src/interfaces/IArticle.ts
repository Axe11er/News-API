export default interface IArticle {
    urlToImage: string;
    author: string;
    publishedAt: string;
    title: string;
    source: { name: string; id: string };
    description: string;
    url: string;
}
