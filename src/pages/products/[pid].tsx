import axios from "axios";

interface SSRProps {
  name: string;
  pid: string | number;
  product: any;
}

const PageDetail = (props: SSRProps) => {
  return (
    <div className="border border-grey-800 max-w-xl max-h-screen m-auto mt-20">
      <h1 className="text-red-400 text-center text-2xl">Page: {props.pid}</h1>
      <div className="text-center">
        <img
          className="w-52 m-auto"
          src={props.product.image}
          alt={props.product.title}
        />
        <p>title: {props.product.title.slice(1, 27)}</p>
        <p>price: {props.product.price}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  let res = await axios.get(
    `https://fakestoreapi.com/products/${context.query.pid}`
  );
  console.log("dataa", res);
  return {
    props: {
      name: "Ankit",
      pid: context.query.pid,
      product: res.data,
    },
  };
}
export default PageDetail;
