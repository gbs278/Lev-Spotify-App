import { Song } from "./Song";
export class Playlist {
  songs: Song[];
  constructor(private name?: string, private description?: string) {
    this.songs = [];
  }
  getName() {
    return this.name;
  }
  getSongs() {
    return this.songs;
  }
  addSong(element: Song) {
    this.songs?.push(element);
  }
}
