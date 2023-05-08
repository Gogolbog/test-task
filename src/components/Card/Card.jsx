import {
  Avatar,
  Button,
  Circle,
  Img,
  Li,
  Line,
  Logo,
  Stats,
} from "./StyledCard";
import image from "../../Images/picture.png";
import logo from "../../Images/Logo.svg";

export const Card = ({ tweets }) => {
  const number = 100500;
  const formattedNumber = number.toLocaleString();
  console.log(formattedNumber);

  return tweets.map(({ id, user, tweets, followers, avatar }) => {
    return (
      <Li key={id}>
        <Logo src={logo} alt="logo" />
        <Img src={image} alt="secondaryImg" />
        <Line></Line>
        <Circle>
          <Avatar src={avatar} alt={user} />
        </Circle>
        <Stats>
          <li>{tweets}tweets</li>
          <li>{followers}followers</li>
        </Stats>
        <Button type="button">follow</Button>
      </Li>
    );
  });
};
