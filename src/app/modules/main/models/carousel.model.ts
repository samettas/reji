export class CarouselModel {
  image?: ImageModel[];
  series?: NavigationItem[];
  movies?: NavigationItem[];
}
export class ImageModel {
  src?: string;
}

export class NavigationItem {
  label?: string;
  link?: string;
}
