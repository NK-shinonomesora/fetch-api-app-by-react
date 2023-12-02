import NormalResponse from "./normalResponse";

export default abstract class MyFetch {
  isFirst = true;
  method: string
  url: string

  constructor(method: string, url: string) {
    this.method = method;
    this.url = url;
  }

  abstract myFetch(input?: string | Person): Promise<Response>;
  abstract myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]>;
}