import axios from "axios";

interface SSRProps {
  product: any;
}

const productListPage = (props: SSRProps) => {
  return (
    <div className="border border-grey-800 max-w-xl max-h-screen m-auto mt-20">
      <h1 className="text-red-400 text-center text-2xl">Product list</h1>
      {props.product.map((item: any) => (
        <>
          <div className="text-center cursor-pointer">
            <img className="w-52 m-auto" src={item.image} alt={item.title} />
            <p>title: {item.title}</p>
            <p>price: {item.price} /-</p>
          </div>
        </>
      ))}
    </div>
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
