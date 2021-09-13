import React, { Fragment, useState } from "react";
import Burger from "./components/Burger";
import Cart from "./components/Cart";
import "./styles/styles.css";

// IMPORTO LAS IMAGENES
import Salteña from "./images/Salteña.png";
import Porteña from "./images/Porteña.png";
import Chicken from "./images/Chicken.png";
import Criolla from "./images/Criolla.png";
import Patagonia from "./images/patagonia.png";

function App() {
    const [burgers, setBurgers] = useState([
        { id: 5, image: Salteña, nombre: "SALTEÑA", precio: 8000 },
        { id: 2, image: Porteña, nombre: "PORTEÑA", precio: 12000 },
        { id: 3, image: Chicken, nombre: "CHICKEN", precio: 9000 },
        { id: 4, image: Criolla, nombre: "CRIOLLA", precio: 8000 },
        { id: 1, image: Patagonia, nombre: "PATAGONIA", precio: 11000 },
    ]);

    const [cart, setCart] = useState([]);

    return (
        <Fragment>
            {/* SECTION CONTENEDOR GLOBAL */}
            <section className="container">
                {/* SECTION DE LA CABECERA */}
                <section className="container__header">
                    {/* BOTON DE LA CABECERA */}
                    <div className="container__header__menu">
                        <button className="container__header__menu--button"></button>
                    </div>

                    {/* TITULO DE LA CABECERA */}
                    <div className="container__header__title">
                        <h3 className="container__header__title--text">
                            BUFALO COMIDAS RAPIDAS
                        </h3>
                    </div>

                    {/* CART DE LA CABECERA */}
                    <div className="container__header__cartDiv">
                        <Cart cart={cart} setCart={setCart} />
                    </div>
                </section>

                {/* SECTION CONTENEDOR PRINCIPAL */}
                <section className="container__content">
                    <div className="container__content__title">
                        <h1>BUFALO TE DA LA BIENVENIDA!</h1>
                    </div>

                    <div className="container__content__listBurgers">
                        {burgers.map((burger) => (
                            <Burger
                                key={burger.id}
                                burger={burger}
                                cart={cart}
                                setCart={setCart}
                                burgers={burgers}
                            />
                        ))}
                    </div>
                </section>

                {/* SECTION FOOTER */}
                <section className="container__footer">
                    <p>JAMES RODRIGUEZ 2021 - Todos los derechos reservados</p>
                </section>
            </section>
        </Fragment>
    );
}

export default App;
