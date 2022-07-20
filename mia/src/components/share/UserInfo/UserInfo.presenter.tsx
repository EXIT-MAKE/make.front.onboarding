import UserInfoStyle from "./UserInfo.style";

function UserInfoPresenter() {
  return (
    <UserInfoStyle.UserInfoBox>
      <UserInfoStyle.UserLogo />
      <UserInfoStyle.UserContentBox>
        <UserInfoStyle.UserName>Mia</UserInfoStyle.UserName>
        <UserInfoStyle.UserEmail>mia@make.education</UserInfoStyle.UserEmail>
      </UserInfoStyle.UserContentBox>
    </UserInfoStyle.UserInfoBox>
  );
}

export default UserInfoPresenter;
