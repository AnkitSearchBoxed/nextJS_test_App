import axios from "axios";
import { useRouter } from "next/router";

interface SSRProps {
  pid: string | number;
  product: any;
}

const PageDetail = (props: SSRProps) => {
  const router = useRouter();

  return (
    <>
      <button
        className="border border-black-700"
        onClick={() => router.push("/products")}
      >
        Home
      </button>
      <h1 className="text-red-400 text-center text-2xl mt-20 text-4xl">
        Page: {props.pid}
      </h1>
      <div className="border border-grey-800 max-w-xl max-h-screen m-auto mt-20">
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
    </>
  );
};

export async function getServerSideProps(context: any) {
  let res = await axios.get(
    `https://fakestoreapi.com/products/${context.query.pid}`
  );

  console.log("dataa", res);

  return {
    props: {
      pid: context.query.pid,
      product: res.data,
    },
  };
}

export default PageDetail;
