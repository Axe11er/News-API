import ISource from '../../../interfaces/ISource';
import './sources.css';

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;
            const sourceItemName = sourceClone?.querySelector('.source__item-name');
            if (sourceItemName) sourceItemName.textContent = item.name;
            sourceClone?.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });

        document?.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
