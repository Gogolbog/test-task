import { useSelector } from "react-redux";
import { UsersList } from "./UsersList/UsersList";
import { Loader } from "./loader";

export default function App() {
  const isLoading = useSelector((state) => state.users.isLoading);
  return (
    <>
      <UsersList />
      {isLoading && <Loader />}
    </>
  );
}
