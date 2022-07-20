import { HeaderStyle } from "./Header.style";
import MakeLogo from "../share/Logo/MakeLogo";
import UserInfo from "../share/UserInfo/UserInfo";

function HeaderPresenter() {
  return (
    <HeaderStyle.HeaderWrapper>
      <HeaderStyle.HeaderInnerWrapper>
        <MakeLogo />
        <UserInfo />
      </HeaderStyle.HeaderInnerWrapper>
    </HeaderStyle.HeaderWrapper>
  );
}

export default HeaderPresenter;
