import MyFetch from "./myFetch";
import NormalResponse from "./normalResponse";

export default class GetPersonsFetch extends MyFetch {
  constructor(method: string, url: string) {
    super(method, url);
  }

  async myFetch(): Promise<Response> {
    return await fetch(`${this.url}`);
  }

  async myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]> {
      const jsonData: GetPersonsI = await res.json();
      data[2].setResponse(jsonData.success, res.status, res.url, jsonData.data);
      return data.map((d, _) => d );
  }
}