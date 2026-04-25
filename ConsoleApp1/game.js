export class ship{
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
export class Gameboard
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
    allshipssunk()
    {
        return this.ships.every(s => s.ship.isSunk())
    }

}

export class Player
{
    constructor(type)
    {
        this.type = type; //type of player
        this.Gameboard = new Gameboard();
    }
        attack(opponent, x,y)
    {
        return opponent.receiveAttack(x,y)
    }
}




