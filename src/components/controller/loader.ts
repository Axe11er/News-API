import INewsData from '../../interfaces/INewsData';
import IResponse from '../../interfaces/IResponse';
import ILoaderOptions from '../../interfaces/ILoaderOptions';
import Endpoint from '../../types/Endpoint';

abstract class Loader {
    constructor(private readonly baseLink: string, private readonly options: ILoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IResponse,
        callback: (data: INewsData) => void = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response | never {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IResponse['options'], endpoint: Endpoint): string {
        const urlOptions: IResponse['options'] = {
            ...this.options,
            ...options,
        };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(
        method: string,
        endpoint: Endpoint,
        callback: (data: INewsData) => void,
        options: IResponse['options'] = {}
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
