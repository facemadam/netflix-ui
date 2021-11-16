import React from "react";
import tw, { styled } from "twin.macro";

const HeroContainer = styled.div`
  ${tw`
    p-8
  `}
  height: 80vh;
  background-size: cover !important;
  ${(props) =>
    `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
`;

const HeroTitle = styled.h1`
  ${tw`
    text-5xl
    font-bold
    mb-4
  `}
  margin-top: 40vh;
`;

const HeroDescription = styled.p`
  ${tw`
    font-medium
    text-lg
    mb-4
  `}
  width: 45rem;
  max-width: 80vw;
  line-height: 1.3;
`;

const HeroButton = styled.button`
  ${tw`
    cursor-pointer
    font-bold
    rounded
    px-8
    py-2
    mr-2
  `}
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    background-color: #e6e6e6;
    color: black;
    transition: all 0.2s;
  }
`;

function Hero({ movie }) {
  console.log(movie);
  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;
