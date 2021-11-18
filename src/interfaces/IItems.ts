import { Sale } from "./ISale";
import { Volums } from "./IVolums";

export interface Items{
  id:string,
  volumeInfo: Volums,
  saleInfo: Sale,
}