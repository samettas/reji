export class HeaderModel {
  logo?: LogoModel[];
  navigationLeft?: NavigationItem[];
  navigationRight?: NavigationItem[];
  buttonItems?: NavigationItem[];
}
export class LogoModel {
  src?: string;
}

export class NavigationItem {
  label?: string;
  link?: string;
}
