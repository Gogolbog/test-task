import { styled } from "styled-components";

export const Div = styled.div`
  position: relative;
  display: block;
  width: 380px;
  height: 460px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const Img = styled.img`
  width: 308px;
  height: 168px;
  padding: 28px 36px 18px 36px;
`;

export const Logo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  padding-top: 20px;
  padding-left: 20px;
`;

export const Line = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Circle = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin: 8px;
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #5736a3;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 62px;
  list-style: none;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  margin: 26px 92px 0 92px;
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;
  background: ${(props) => (props.isFollowing ? "#5CD3A8" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;
