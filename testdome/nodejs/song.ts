class Song {
  name: string;
  nextSong: Song;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * @return {boolean} true if the playlist is repeating, false if not.
   */
  isInRepeatingPlaylist() {
    // Your code goes here
    const playlist = new Map();
    let song: Song = this;
    while (song) {
      playlist.set(song.name, song);
      song = song.nextSong;
      if (song && playlist.has(song.name)) {
        return true;
      }
    }
    return false;
  }
}

let first = new Song("Hello");
let second = new Song("Eye of the tiger");

first.nextSong = second;
second.nextSong = first;

console.log(first.isInRepeatingPlaylist());
