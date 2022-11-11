import { Guid } from "guid-typescript";

export interface Produto{
    id: Guid
    produto: string
    valor: number
    quantidade: number
}