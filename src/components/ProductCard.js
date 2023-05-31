
function productCard(props) {
    return (
        <>
            <div class="col-md-4" style={{ marginBottom: "10px" }}>
                <div className='card'>
                    <img src={props.product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "250px" }} />
                    <div className="card-body">
                        <h5 className="card-title text-truncate">{props.product.title}</h5>
                        <p className="card-text">${props.product.price}</p>
                        <button className="btn btn-primary mx-2">View Details</button>
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>

    )
}
export default productCard;