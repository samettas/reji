export class Footer {
    logo?: string;
    dizilerLeft?: NavigationItem[];
    filmlerRight?: NavigationItem[];
    projelerimiz?: NavigationItem[];
    sosyalMedia?: Sosyal[];
  }
  
  
  export class NavigationItem {
    label?: string;
    link?: string;
  }
  export class Sosyal {
    twiter?: string;
    instagram?: string;
    mail?:string;
  }

