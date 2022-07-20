import { TodoProps } from "../components/todo-list/TodoList.type";

export async function setStorageItem<T>(key: string, value: object) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    await console.log("error");
  }
}

export async function getStorageItem<T>(key: string): Promise<TodoProps[]> {
  try {
    const data = localStorage.getItem(key) as string;
    return JSON.parse(data);
  } catch (error) {
    await console.log("error");
  }
}

export async function removeStorageItem(key: string) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    await console.error("error");
  }
}
