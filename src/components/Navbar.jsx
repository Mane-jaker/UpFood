import '../style/Navbar.css'

function Navbar(){
    return(
        <div className="row bt">
            <div className="col-2 offset-2 first">
                <nav className='letn'>Inicio</nav>
            </div>
            <div className="col-2 sec">
                <nav className='letn'>Categorias</nav>
            </div>
            <div className="col-2 thir">
                <nav className='letn'>Restaurantes</nav>
            </div>
            <div className="col-2 last">
                <nav className='letn'>Perfil</nav>
            </div>
        </div>
    );

}

export default Navbar;