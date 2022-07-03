import IArticle from '../../../interfaces/IArticle';
import './news.css';

class News {
    draw(data: IArticle[]): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp?.content.cloneNode(true) as HTMLDivElement;
            if (idx % 2) newsClone?.querySelector('.news__item')?.classList.add('alt');
            const newsMetaPhoto = newsClone?.querySelector('.news__meta-photo') as HTMLDivElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || '../../../assets/images/placeholder-image.png'})`;
            const newsMetaAuthor = newsClone?.querySelector('.news__meta-author');
            if (newsMetaAuthor) newsMetaAuthor.textContent = item.author || item.source.name;
            const newsMetaDate = newsClone?.querySelector('.news__meta-date');
            if (newsMetaDate) newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            const newsDescriptionTitle = newsClone?.querySelector('.news__description-title');
            if (newsDescriptionTitle) newsDescriptionTitle.textContent = item.title;
            const newsDescriptionSource = newsClone?.querySelector('.news__description-source');
            if (newsDescriptionSource) newsDescriptionSource.textContent = item.source.name;
            const newsDescriptionContent = newsClone?.querySelector('.news__description-content');
            if (newsDescriptionContent) newsDescriptionContent.textContent = item.description;
            newsClone?.querySelector('.news__read-more a')?.setAttribute('href', item.url);
            fragment.append(newsClone);
        });

        const newsElement = document?.querySelector('.news');
        if (newsElement) newsElement.innerHTML = '';
        document?.querySelector('.news')?.appendChild(fragment);
    }
}

export default News;
