import Loader from './loader';

abstract class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '0f175c29ee1c407d99a35052c062de89', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
