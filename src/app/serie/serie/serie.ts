export class serie {
  id: number;
  name: string;
  channel: string;
  seasons: number;
  description: string;
  webpage: string;
  poster: string;
;

  public constructor(id:number, name:string, channel:string, seasons:number, descriptio:string, webpage:string, poster:string){
    this.id = id;
    this.name = name;
    this.channel = channel
    this.seasons = seasons
    this.description = descriptio
    this.webpage = webpage
    this.poster = poster

  }
}
