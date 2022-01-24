import WeatherChecker from '../src/view';
import { styled } from '@mui/material';
import { RecoilRoot } from "recoil";

const Root = styled("div")(() => ({
  width: "100%",
  display: "flex"
}));

export default function Home() {
  return (
    <RecoilRoot>
      <Root>
        <WeatherChecker />
      </Root>
    </RecoilRoot>
  )
}
