import CardFood from './CardFood'

function PrimaryBar(){
    const food = [
        {
            name: "Barbacha",
            price: "20",
            rank: 4,
            foto: "img/barbacha.jpg",
        },
        {
            name: "Burrito",
            price: "30",
            rank: 4,
            foto: "img/burrito.jpg",
        },
        {
            name: "Taco pastor",
            price: "10",
            rank: 4,
            foto: "img/pastor.jpg",
        },
        {
            name: "licuado",
            price: "20",
            rank: 4,
            foto: "img/licuado.jpg",
        },
    ]
    return(
        <div className="container">
            <h2 className='marg'>Populares</h2>
            <div className="row">
                {food.map((food) => {
                    return <CardFood name={food.name} price={food.price} rank={food.rank} foto={food.foto}>
                        <div className="row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bookmark-heart-fill float-end" viewBox="0 0 16 16">
                                <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
                            </svg>
                        </div>
                        </CardFood>
                })}
            </div>
        </div>
    );
}

export default PrimaryBar;