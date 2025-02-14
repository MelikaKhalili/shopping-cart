import { useContext } from "react";
import { ContextCart } from "../../../Context/ContextCart";
interface Iprops {
  id: string | number;
  count: number;
  className: string;
}
export default function Counter({ count, id, className }: Iprops) {
  const { dispatchCart } = useContext(ContextCart);
  console.log(dispatchCart);
  const handelDecreaseProduct = () => {
    if (count > 1) {
      dispatchCart({
        type: "UPDATE_PRODUCT",
        payload: {
          id: id,
          count: count - 1,
        },
      });
    } else {
      dispatchCart({
        type: "DELETE_PRODUCT",
        payload: id,
      });
    }
  };
  return (
    <div className={className}>
      <button onClick={handelDecreaseProduct}>-</button>
      <span>{count}</span>
      <button
        onClick={() =>
          dispatchCart({
            type: "UPDATE_PRODUCT",
            payload: {
              id: id,
              count: count + 1,
            },
          })
        }
      >
        +
      </button>
    </div>
  );
}
