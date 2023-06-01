import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';






function ProductsDetails() {

    const params = useParams();
    const productId = params.id;
    console.log(productId);

    const [products, setProducts] = useState([]);

    // this is useEffect
    useEffect(() => {

        fetch(`https://fakestoreapi.com/products/${productId}`).then((data) => {
            return data.json()
        }).then((res) => {
            setProducts(res);
        })

    }, []);
    console.log(products);
    //  End of useEffect

    let ratingJSX ="";
    if (Object.keys(products).length > 0) {
        let Rate = Number(products.rating['rate']);
        for (let i = 0; i < Math.round(Rate); i++) {
            ratingJSX += `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path></svg>`
        }
    }


    if (Object.keys(products).length > 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={products.image} height={"350px"}></img>

                    </div>

                    <div className="col-md-6">
                        <div><h1>{products.title}</h1></div>
                        <div ><h2>Price: ${products.price}</h2></div>
                        <div ><h6>{products.description}</h6></div>
                        <div><h4>{products.category}</h4></div>
                        <div>{products.rating['rate']}</div>
                        <div dangerouslySetInnerHTML={{ __html: ratingJSX }} />

                </div>

            </div>
        )
    } else {
        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    }
}
export default ProductsDetails;