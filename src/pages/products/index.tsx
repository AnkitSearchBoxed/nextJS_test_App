import axios from "axios";
import { useRouter } from "next/router";

interface SSRProps {
  product: any;
}

const ProductListPage = (props: SSRProps) => {
  const router = useRouter();

  return (
    <>
      <h1 className="text-red-400 text-center text-4xl mt-20px">
        Product list
      </h1>
      <div className="border border-grey-800 p-5 m-5 m-auto  mt-5 grid grid-cols-3 gap-1">
        {props.product.map((item: any, id: number) => (
          <div key={id} onClick={() => router.push(`products/${item.id}`)}>
            <div className=" border border-grey-600 text-center cursor-pointer ">
              <img
                className="w-52 h-52 m-4.25 p-5 m-auto "
                src={item.image}
                alt={item.title}
              />
              <p>Title: {item.title.slice(1, 17).toUpperCase()}</p>
              <p>Price: {item.price} /-</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListPage;

export async function getServerSideProps(context: any) {
  let res = await axios.get("https://fakestoreapi.com/products/");

  console.log("res:", res.status);
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: res.data,
    },
  };
}
