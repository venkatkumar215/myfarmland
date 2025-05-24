export interface AnimalType {
  name: string;
  iconName: string;
  iconLibrary: any;
  count: number;
  size: number;
}

export interface HomeActionType {
  name: string;
  imgKey: "animal" | "task" | "feed" | "crop";
}
