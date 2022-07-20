import Header from "../header/Header";
import { LayoutProps } from "./Layout.type";

function LayoutPresenter({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default LayoutPresenter;
