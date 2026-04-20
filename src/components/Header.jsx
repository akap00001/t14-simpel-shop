import { BsBagFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <nav>
      <h1 className="logo">SHOPi.</h1>
      <ul>
        <li>
          <Link href={"/"}>HOME</Link>
        </li>
        <li>
          <Link href={"/products/id/page.js"}>PRODUCTS</Link>
        </li>
        <li className="cart-space">
          <Link href={"/payment/page.js"} className="cart-space">
            CART | <BsBagFill />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
