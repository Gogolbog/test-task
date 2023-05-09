import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../redux/thunk";
import { useEffect, useState } from "react";
import { DIV, UL } from "./StyledUsersList";
import { Btn } from "../Btn/btn";
import { Card } from "../Card/Card";

export const UsersList = () => {
  const dispatch = useDispatch();
  const [showBtn, setShowBtn] = useState(false);
  const [loadedUsers, setLoadedUsers] = useState([]);
  const [limit, setLimit] = useState(3);
  let page = 1;

  useEffect(() => {
    dispatch(getUsersThunk({ page, limit }));
  }, [dispatch, page, limit]);

  const users = useSelector((state) => state.users.items);

  useEffect(() => {
    if (users.length > 0) {
      setLoadedUsers(users);
      setShowBtn(users.length === limit);
    }
  }, [users, limit]);

  const handleLoadMore = () => {
    setLimit(limit + 3);
  };

  return (
    <DIV>
      <UL>
        {loadedUsers.map((user) => (
          <li key={user.id}>
            <Card props={user} />
          </li>
        ))}
      </UL>
      {showBtn && <Btn handleLoadMore={handleLoadMore} />}
    </DIV>
  );
};
