import MyFetch from "./myFetch";
import NormalResponse from "./normalResponse";

export default class DeletePersonsFetch extends MyFetch {
  constructor(method: string, url: string) {
    super(method, url);
  }

  async myFetch(name: string): Promise<Response> {
    this.isFirst = false;
    return await fetch(`${this.url}/${name}`, { method: `${this.method}`});
  }

  async myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]> {
      const jsonData: NormalResponseI = await res.json();
      data[5].setResponse(jsonData.success, res.status, res.url, jsonData.data);
      return data.map((d, _) => d );
  }
}