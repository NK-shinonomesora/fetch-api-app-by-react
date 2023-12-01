import NormalResponse from "./normalResponse";

export default abstract class MyFetch {
  method: string
  url: string

  constructor(method: string, url: string) {
    this.method = method;
    this.url = url;
  }

  abstract myFetch(name?: string): Promise<Response>;
  abstract myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]>;
}