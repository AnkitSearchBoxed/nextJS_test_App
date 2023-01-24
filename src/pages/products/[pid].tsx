import axios from "axios";

interface SSRProps {
    name: string
    pid: string | number
    product: any
}

const PageDetail = (props : SSRProps) => {
    console.log(props.pid)
    return (
        <>
        <h1>Page {props.pid}</h1>
            <div className="productCard">
                <img src="" alt=""/>
                <p>title: test Ankit</p>
                <p>price: test 500</p>

            </div>
        </>
    )
}

 export async function getServerSideProps(context: any, myProduct: any) {

    axios.get(`https://fakestoreapi.com/products/${context.query.pid}`).then((res)=> console.log(res.data))
    return {
        props: {
            name: "Ankit",
            pid: context.query.pid
        }
    }
console.log("myProduct", myProduct)
 }
export default PageDetail;