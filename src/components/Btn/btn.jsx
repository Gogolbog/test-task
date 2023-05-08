import { LoadMoreBtn } from "./StyledBtn";

export const Btn = ({ handleLoadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={handleLoadMore}>
      Load more
    </LoadMoreBtn>
  );
};
