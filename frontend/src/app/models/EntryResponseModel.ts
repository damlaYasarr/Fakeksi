import { EntryFlow } from "./entryflow";
import { ResponseModel } from "./responseModels";

export interface EntryResponseModels extends ResponseModel{
    data: EntryFlow[],
  
}