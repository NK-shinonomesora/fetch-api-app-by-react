import MyFetch from "./myFetch";
import NormalResponse from "./normalResponse";

export default class GetPersonsNameFetch extends MyFetch {
  constructor(method: string, url: string) {
    super(method, url);
  }

  async myFetch(name: string): Promise<Response> {
    return await fetch(`${this.url}/${name}`);
  }

  async myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]> {
      const jsonData: GetPersonsNameI = await res.json();
      data[0].setResponse(jsonData.success, res.status, res.url, jsonData.data);
      return data.map((d, _) => d );
  }
}