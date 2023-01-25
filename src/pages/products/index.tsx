import axios from "axios";

interface SSRProps {
  product: any;
}

const productListPage = (props: SSRProps) => {
  return (
    <>
      <h1 className="text-red-400 text-center text-2xl">Product list</h1>
      {props.product.map((item: any) => (
        <>
          <div className="text-center cursor-pointer">
            <img className="w-52 m-auto" src={item.image} alt={item.title} />
            <p>Title: {item.title.slice(1, 17).toUpperCase()}</p>
            <p>Price: {item.price} /-</p>
          </div>
        </>
      ))}
      <div className="border border-grey-800 max-w-xl  mt-20 flex "></div>
    </>
  );
};

export default productListPage;

export async function getServerSideProps(context: any) {
  let res = await axios.get("https://fakestoreapi.com/products/");
  return {
    props: {
      product: res.data,
    },
  };
}
