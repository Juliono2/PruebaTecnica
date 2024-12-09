// Interface para detalle de juego

import { Deals } from "./deals"

export interface GameInfo {
    info: {
        title: string,
        steamAppID: number,
        thumb: string
        },
        cheapestPriceEver: {
            price: number,
            date: Date
        },
        deals: [Deals]
}