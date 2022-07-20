import { useState } from "react";
import MenuPresenter from "./Menu.presenter";
import { MenuProps } from "./Menu.type";

function Menu({
  // todo,
  optionList,
  handleEditTodo,
  handleRemoveTodo,
}: MenuProps) {
  const [menuDrop, setMenuDrop] = useState<boolean>(false);

  const handleKebabClick = () => {
    setMenuDrop(true);
  };

  return (
    <MenuPresenter
      // todo={todo}
      menuDrop={menuDrop}
      optionList={optionList}
      handleKebabClick={handleKebabClick}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
    />
  );
}

export default Menu;
