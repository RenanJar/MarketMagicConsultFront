import { CardDTO } from "./CardDTO";

export interface VerifiedObjectsDTO{
    objectsFound:CardDTO[];
    objectsNotFound:String[];
}