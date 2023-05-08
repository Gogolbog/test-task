import { useDispatch, useSelector } from "react-redux";
import { getUsersThunk } from "../../redux/thunk";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
import { UL } from "./StyledUsersList";
import { Btn } from "../Btn/btn";

export const UsersList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [showBtn, setShowBtn] = useState(false);
  let limit = 3;

  useEffect(() => {
    dispatch(getUsersThunk({ page, limit }));
  }, [dispatch, page, limit]);

  const tweets = useSelector((state) =>
    state.users.items.slice(0, page * limit)
  );

  useEffect(() => {
    setShowBtn(
      tweets.length % limit === 0 && tweets.length !== 0 ? true : false
    );
  }, [tweets.length, limit]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <UL>
        <Card tweets={tweets} />
      </UL>
      {showBtn && <Btn handleLoadMore={handleLoadMore} />}
    </div>
  );
};
