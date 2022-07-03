import IArticle from './IArticle';
import ISource from './ISource';

export default interface INewsData {
    articles: IArticle[];
    sources: ISource[];
}
