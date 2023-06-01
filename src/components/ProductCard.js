import { Link } from "react-router-dom";

function productCard(props) {
    return (
        <>
            <div class="col-md-4" style={{ marginBottom: "10px" }}>
                <div className='card'>
                    <img src={props.product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "250px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">{props.product.title}</h5>
                        <p className="card-text">${props.product.price}</p>
                        <button className="btn btn-primary">Add to cart</button>
                        <Link to={`product/${props.product.id}`} className="btn btn-primary"> ViweDetails</Link>
                    </div>
                </div>
            </div>
        </>

    )
}
export default productCard;