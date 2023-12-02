export default abstract class NormalResponse {
    success: boolean;
    status: number;
    url: string;
    data: object | null;

    abstract display(isFirst: boolean): JSX.Element;
    abstract setResponse(success: boolean, status: number, url: string, data: object): void;
}