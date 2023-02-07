import React, { useEffect, useState } from 'react';
import '../css/boutique.css'
import Card from './Card.js'
import '../scss/bootstrap.css';

function Boutique({ products, cart, addToCart }) {
    const [categoriesRoll, setCategoriesRoll] = useState('-')
    const [priceRoll, setPriceRoll] = useState('-')
    const [reviewsRoll, setReviewsRoll] = useState('-')
    const [largeur, setLargeur] = useState(window.innerWidth)
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(20)
    const [tous, setTous] = useState(true)
    const [chocolatBlanc, setChocolatBlanc] = useState(false)
    const [chocolatAuLait, setChocolatAuLait] = useState(false)
    const [chocolatNoir, setChocolatNoir] = useState(false)
    const [noixNoisette, setNoixNoisette] = useState(false)
    const [fruit, setFruit] = useState(false)
    const [caramel, setCaramel] = useState(false)
    const [liqueur, setLiqueur] = useState(false)
    const [minReview, setMinReview] = useState(0)
    const [maxReview, setMaxReview] = useState(5)

    var onDiplayChange
    if (largeur > 576) {
        onDiplayChange = true
    } else {
        onDiplayChange = false
    }

    useEffect(() => {
        setCategoriesRoll('-')
        setPriceRoll('-')
        setReviewsRoll('-')
    }, [onDiplayChange])


    const displayCategoriesRoll = () => {
        if (categoriesRoll === '+') {
            setCategoriesRoll('-')
        } else if (categoriesRoll === '-') {
            setCategoriesRoll('+')
        }
    }

    const displayPriceRoll = () => {
        if (priceRoll === '+') {
            setPriceRoll('-')
        } else if (priceRoll === '-') {
            setPriceRoll('+')
        }
    }

    const displayReviewsRoll = () => {
        if (reviewsRoll === '+') {
            setReviewsRoll('-')
        } else if (reviewsRoll === '-') {
            setReviewsRoll('+')
        }
    }

    // change largeur value in function of the width window value
    useEffect(() => {
        const changeWidth = () => {
            setLargeur(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth)
        }

    }, [])

    const changeOnClickOnTous = () => {
        setTous(!tous);
        if (!tous) {
            setChocolatBlanc(false);
            setChocolatAuLait(false);
            setChocolatNoir(false);
            setNoixNoisette(false);
            setFruit(false);
            setCaramel(false);
            setLiqueur(false);
        }
    }

    // if all catégories are checked, it checked tous and unchecked the rest
    if (!tous && chocolatBlanc && chocolatAuLait && chocolatNoir && noixNoisette && fruit && caramel && liqueur) { changeOnClickOnTous() }

    // to dont have the minimum price > of the maximum price "i dont know why but if i dont put the /10 to the values it does not work"
    if (minPrice / 10 > maxPrice / 10) { setMinPrice(maxPrice) }

    // to dont have the minimum review > of the maximum review
    if (minReview > maxReview) { setMinReview(0) }

    return (
        <div className='container' style={{ flexWrap: 'wrap' }}>
            <h2 className='text-center'>BOUTIQUE</h2>
            <div className='row'>
                <div className='col-sm-3'>
                    <h3>FILTRE</h3>
                    <h4 onClick={displayCategoriesRoll}>Catégories <span>{largeur > 576 ? '' : categoriesRoll}</span></h4>
                    {(categoriesRoll === '+' || largeur > 576) && (
                        <ul>
                            <li><input type="checkbox" id="Tous" name="Tous" checked={tous} onChange={changeOnClickOnTous} /> <label htmlFor="Tous">Tous {tous.toString()}</label></li>
                            <li><input type="checkbox" id="ChocolatBlanc" name="ChocolatBlanc" checked={chocolatBlanc} onChange={() => { setChocolatBlanc(!chocolatBlanc); setTous(false) }} /> <label htmlFor="ChocolatBlanc">Chocolat blanc {chocolatBlanc.toString()}</label></li>
                            <li><input type="checkbox" id="ChocolatAuLait" name="ChocolatAuLait" checked={chocolatAuLait} onChange={() => { setChocolatAuLait(!chocolatAuLait); setTous(false) }} /> <label htmlFor="ChocolatAuLait">Chocolat au lait {chocolatAuLait.toString()}</label></li>
                            <li><input type="checkbox" id="ChocolatNoir" name="ChocolatNoir" checked={chocolatNoir} onChange={() => { setChocolatNoir(!chocolatNoir); setTous(false) }} /> <label htmlFor="ChocolatNoir">Chocolat noir {chocolatNoir.toString()}</label></li>
                            <li><input type="checkbox" id="NoixNoisette" name="NoixNoisette" checked={noixNoisette} onChange={() => { setNoixNoisette(!noixNoisette); setTous(false) }} /> <label htmlFor="NoixNoisette">Noix/Noisette {noixNoisette.toString()}</label></li>
                            <li><input type="checkbox" id="Fruit" name="Fruit" checked={fruit} onChange={() => { setFruit(!fruit); setTous(false) }} /> <label htmlFor="Fruit">Fruit {fruit.toString()}</label></li>
                            <li><input type="checkbox" id="Caramel" name="Caramel" checked={caramel} onChange={() => { setCaramel(!caramel); setTous(false) }} /> <label htmlFor="Caramel">Caramel {caramel.toString()}</label></li>
                            <li><input type="checkbox" id="Liqueur" name="Liqueur" checked={liqueur} onChange={() => { setLiqueur(!liqueur); setTous(false) }} /> <label htmlFor="Liqueur">Liqueur {liqueur.toString()}</label></li>
                        </ul>
                    )}
                    <h4 onClick={displayPriceRoll}>Prix <span>{largeur > 576 ? '' : priceRoll}</span></h4>
                    {(priceRoll === '+' || largeur > 576) && (
                        <ul>
                            <li className='pb-2'>Prix min <input type="range" id='prixMin' min="0" max="20" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} /> {minPrice}</li>
                            <li>Prix max <input type='range' id='prixMax' min='0' max='20' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} /> {maxPrice}</li>
                        </ul>
                    )}
                    <h4 onClick={displayReviewsRoll}>Notes <span>{largeur > 576 ? '' : reviewsRoll}</span></h4>
                    {(reviewsRoll === '+' || largeur > 576) && (
                        <ul>
                            <li>
                                <label>Note min &nbsp;</label>
                                <select id="noteMin" value={minReview} onChange={(e) => setMinReview(e.target.value)}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </li>
                            <li>
                                <label>Note max &nbsp;</label>
                                <select id="noteMin" value={maxReview} onChange={(e) => setMaxReview(e.target.value)}>
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </li>
                        </ul>
                    )}
                </div>
                <div className='col-sm-9'>
                    <ul className='row m-0 p-0'>
                        {products
                            .filter(product => product.price >= minPrice && product.price <= maxPrice)
                            .filter(product => { if (tous) return true; if ((product.category.blanc && chocolatBlanc) || (product.category.lait && chocolatAuLait) || (product.category.noir && chocolatNoir) || (product.category.caramel && caramel) || (product.category.noix && noixNoisette) || (product.category.fruit && fruit) || (product.category.liqueur && liqueur)) return true; return false; })
                            .filter(product => product.note >= minReview && product.note <= maxReview)
                            .map((product) => (
                                <Card key={product.id} product={product} addToCart={addToCart} />
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Boutique;