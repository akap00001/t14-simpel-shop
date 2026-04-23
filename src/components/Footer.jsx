import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <ul>
        <Link href={"/"}>HOME</Link>
        <Link href={"/products"}>PRODUCTS</Link>
      </ul>

      <div className="footer-bottom">
        <div>
          <p className="footer-link">TERMS & CONDITIONS</p>
          <p className="footer-link">PRIVACY POLICY</p>
        </div>
        <h1 className="logo">SHOPi.</h1>
        <p className="copyright">©2026.Akap&Noha</p>
      </div>
    </footer>
  );
};

export default Footer;
