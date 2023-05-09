import {
  Avatar,
  Button,
  Circle,
  Div,
  Img,
  Line,
  Logo,
  Stats,
} from "./StyledCard";
import image from "../../Images/picture.png";
import logo from "../../Images/Logo.svg";
import { addFollowing, removeFollowing } from "../../redux/followingSlice";
import { useDispatch, useSelector } from "react-redux";

export const Card = ({ props }) => {
  const dispatch = useDispatch();
  const { id, avatar, tweets, followers, name } = props;
  const follow = useSelector((state) => state.following.followingUsers);

  const isFollowing = Boolean(follow.find((followingId) => followingId === id));

  function handleClick(id) {
    if (isFollowing) {
      dispatch(removeFollowing(id));
    } else {
      dispatch(addFollowing(id));
    }
  }

  const followersCount = isFollowing
    ? Number(followers) + 1
    : Number(followers);

  const format = followersCount.toLocaleString("en-US");

  return (
    <>
      <Div>
        <Logo src={logo} alt="logo" />
        <Img src={image} alt="secondaryImg" />
        <Line />
        <Circle>
          <Avatar src={avatar} alt={name} />
        </Circle>
        <Stats>
          <li>{tweets} tweets</li>
          <li>{format} followers</li>
        </Stats>
        <Button
          type="button"
          onClick={() => handleClick(id)}
          isFollowing={Boolean(
            follow.find((followingId) => followingId === id)
          )}
        >
          {Boolean(follow.find((followingId) => followingId === id))
            ? "following"
            : "follow"}
        </Button>
      </Div>
    </>
  );
};
