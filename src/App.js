import { ThemeProvider } from "@emotion/react";
import logo from "./logo.png";
import {
  ActionsWrapper,
  CardWrapper,
  Container,
  DescriptionWrapper,
  ImageWrapper,
  Logo,
  Main,
  PrimaryButton,
  SecondaryButton,
  TextWrapper,
  TitleWrapper,
} from "./styles";

const hotels = [
  {
    id: 1,
    src: "images/hotel-leisure.jpeg",
    alt: "",
    title: "Hotel Leisure",
    description: "Enjoy world-class shopping in the heart of the city.",
  },
  {
    id: 2,
    src: "images/hotel-paradise.jpeg",
    alt: "",
    title: "Hotel Paradise",
    description: "Enjoy open-air spaces, waterfront dining, and poolside fun.",
  },
  {
    id: 3,
    src: "images/hotel-holiday.jpeg",
    alt: "",
    title: "Hotel Holiday",
    description: "Discover your home away from home.",
  },
];

export const theme = {
  colors: {
    primary: "#03045e",
    secondary: "#caf0f8",
    tertiary: "#023e8a",
    quaternary: "#fff",
  },
  fonts: {
    primary: "helvetica",
  },
  fontSize: {
    primary: "20px",
    secondary: "14px",
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Logo src={logo} alt="logo" />
        <Container>
          {hotels.map(hotel => {
            return (
              <CardWrapper key={hotel.id}>
                <ImageWrapper src={hotel.src} alt={hotel.alt} />
                <TextWrapper>
                  <TitleWrapper>{hotel.title}</TitleWrapper>
                  <DescriptionWrapper>{hotel.description}</DescriptionWrapper>
                </TextWrapper>
                <ActionsWrapper>
                  <PrimaryButton>Details</PrimaryButton>
                  <SecondaryButton>Book</SecondaryButton>
                </ActionsWrapper>
              </CardWrapper>
            );
          })}
        </Container>
      </Main>
    </ThemeProvider>
  );
};

export default App;
