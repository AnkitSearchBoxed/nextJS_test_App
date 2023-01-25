import axios from "axios";

interface SSRProps {
  product: any;
}

const productListPage = (props: SSRProps) => {
  return (
    <>
      <h1 className="text-red-400 text-center text-2xl">Product list</h1>
      <div className="border border-grey-800 p-5 m-5 m-auto  mt-20 grid grid-cols-3 gap-1">
        {props.product.map((item: any) => (
          <>
            <div className=" border border-grey-600 text-center cursor-pointer ">
              <img
                className="w-52 h-52 m-5 p-5 m-auto "
                src={item.image}
                alt={item.title}
              />
              <p>Title: {item.title.slice(1, 17).toUpperCase()}</p>
              <p>Price: {item.price} /-</p>
            </div>
          </>
        ))}
      </div>
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
