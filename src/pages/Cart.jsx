import { useAtom } from "jotai";
import { cartAtom, totalItemsAtom, totalPriceAtom } from "../jotai/cartAtom";
import { removeFromCart } from "../jotai/cartUtils";
import { useCheckCartStock } from "../hooks/useCheckCartStock";

const Cart = () => {
  const cart = useCheckCartStock();  // Auto-check stock
  const [totalItems] = useAtom(totalItemsAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const [, setCart] = useAtom(cartAtom);

  return (
    <div>
      <h2>Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.quantity} x Rp{item.price}
              <button onClick={() => removeFromCart(setCart, item.id)}>Hapus</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Produk: {totalItems}</p>
      <p>Total Harga: Rp{totalPrice}</p>
    </div>
  );
};

export default Cart;
