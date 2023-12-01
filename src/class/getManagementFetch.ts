import MyFetch from "./myFetch";
import NormalResponse from "./normalResponse";

export default class GetManagementFetch extends MyFetch {
  constructor(method: string, url: string) {
    super(method, url);
  }

  async myFetch(): Promise<Response> {
    return await fetch(this.url);
  }

  async myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]> {
    const jsonData: GetManagementI = await res.json();
    data[1].setResponse(jsonData.success, res.status, res.url, jsonData.data);
    return data.map((d, _) => d );
}
}