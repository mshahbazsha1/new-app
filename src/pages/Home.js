
import ProductCard from "../components/ProductCard"

function Home(props) {

    if (props.products.length > 0) {
        return (
            <>
                <h1 className="my-3" > Our Products</h1>
                <div className='row'>
                    {
                        props.products.map((product) => {
                            return (
                                <ProductCard product={product} key={product.id} />
                            )
                        })
                    }
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </>
        )
    }

}
export default Home;