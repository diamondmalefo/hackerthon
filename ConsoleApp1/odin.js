class ship{
    constructor(ship_length)
    {
        this.ship_length = ship_length;
        this.hits = 0;
    }

    hit()
    {
       this.hits++;
    }

    isSunk()
    {
       return this.hits >= this.ship_length;
    }

}
class Gameboard
{
    constructor()
    {
        this.ships =[];
        this.missedshots = [];
    }

    placeShip(shipInstance, x, y)
    {
        this.ships.push
        (
            {
                ship: shipInstance,
                x: x,
                y:y
            }
        )
    }
    receiveAttack(x,y)
    {
        //find if ship exits in these coordinates
        const target = this.ships.find
        (s => s.x ===x && s.y === y);

        if(target)
        {
            target.ship.hit();
            return "hit"
        }
        else 
        {
            this.missedshots.push({x, y}); 
            return "miss"
        }
    }
}

const myboard = new Gameboard();
const myship = new ship(1);

myboard.placeShip(myship, 2, 3);

console.assert(myboard.receiveAttack(2, 3) === "hit", "Should be a hit");
console.assert(myboard.receiveAttack(0, 0) === "miss", "Should be a miss");
console.log(result)