import LayoutPresenter from "./Layout.presenter";
import { LayoutProps } from "./Layout.type";

function Layout({ children }: LayoutProps) {
  return (
    <>
      <LayoutPresenter children={children} />
    </>
  );
}

export default Layout;
