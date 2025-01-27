import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Footer from "../Footer";
import Header from "../Header";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("content")}>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
