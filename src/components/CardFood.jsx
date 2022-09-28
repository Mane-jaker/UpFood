import '../style/CardFood.css'

function CardFood({name,price,rank,foto,children}){
    return(
        <div className="col-3 marg">
            <div className="container-fluid">
                <a className="row">
                    <img src={foto} alt="" className="img-fluid roun"/>
                </a>
                <div className="container-fluid block-orange">
                    <div className="row">
                        <p className='tit'>{name}</p>
                    </div>
                    <div className="row">
                        <div className="col">
                            <p className='price'>${price}</p>
                        </div>
                        <div className="col">
                            <p className='rank'>{rank}/5 estrellas</p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardFood;