export interface ThemeComponent {
  data: {
    artistName?:string;
    albumName?:string;
    albumArtUrl?:string;
    programs?:Programs;
  };
}
export interface Programs {
    One:string[];
    Two:string[];
    Three:string[];
    Four:string[];
}
