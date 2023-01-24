import axios from "axios";

interface SSRProps {
    name: string
    pid: string | number
    product: any
}

const PageDetail = (props : SSRProps) => {

    return (
        <>
        <h1>Page {props.pid}</h1>
            <div className="productCard">
                <img src={props.product.image} alt={props.product.title}/>
                <p>title: {props.product.title}</p>
                <p>price: {props.product.price}</p>
            </div>
        </>
    )
}

 export async function getServerSideProps(context: any) {
    let res = await axios.get(`https://fakestoreapi.com/products/${context.query.pid}`)
    console.log("dataa", res)
    return {
        props: {
            name: "Ankit",
            pid: context.query.pid,
            product: res.data

        }
    }
 }
export default PageDetail;