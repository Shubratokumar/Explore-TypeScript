// define enum
const enum SeatChoice {
    AISLE = "alise", // by default it takes number value 1. we can assign any number or string value. if we set the number then rest will take subsequent numeric values.
    MIDDLE = 4, // once we set string rest must be defined. if number rest will take automatically.
    WINDOW,
    FOURTH
}

const skSeat = SeatChoice.AISLE
 export {}