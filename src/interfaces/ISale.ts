import { IPrice } from "./IPrice";

export interface Sale{
  buyLink: string,
  saleability: string,
  listPrice:IPrice,
  retailPrice: IPrice,
}