import MyFetch from "./myFetch";
import NormalResponse from "./normalResponse";

export default class PostPersonsFetch extends MyFetch {
  constructor(method: string, url: string) {
    super(method, url);
  }

  async myFetch(person: Person): Promise<Response> {
    this.isFirst = false;
    return await fetch(`${this.url}`, { 
          method: `${this.method}`,
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(person)
      });
  }

  async myJson(res: Response, data: NormalResponse[]): Promise<NormalResponse[]> {
      const jsonData: NormalResponseI = await res.json();
      data[3].setResponse(jsonData.success, res.status, res.url, jsonData.data);
      return data.map((d, _) => d );
  }
}