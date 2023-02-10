
import { Entryflow } from "./Entryflow";
import { ResponseModel } from "./responseModels";

export interface EntryResponseModels extends ResponseModel{
    data: Entryflow[];
  
}