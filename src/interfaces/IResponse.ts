import Endpoint from '../types/Endpoint';

export default interface IResponse {
    endpoint: Endpoint;
    options?: { [key: string]: string | undefined | null; sources?: string | null };
}
