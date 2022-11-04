export interface INavbarData {
  routeLink : string;
  icon?:string;
  expanded? : boolean;  //string
  label : string;
  items? : INavbarData[];
}
