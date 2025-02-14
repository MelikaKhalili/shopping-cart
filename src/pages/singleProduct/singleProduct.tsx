import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProduct } from "../../components/services/Products";

export default function SingleProduct() {
  const [product, setProduct] = useState<any>({});
  const params = useParams();
  console.log(params.id);
  useEffect(() => {
    getProduct(params.id).then((res: any) => setProduct(res));
  }, []);
  return (
    <div>
      <h1>{product.name}</h1>
    </div>
  );
}
