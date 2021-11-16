import React from "react";
import tw, { styled } from "twin.macro";

const MoviesContainer = styled.div`
  ${tw`
    my-8
  `}
`;

const MoviesTitle = styled.h2`
  ${tw`
      text-2xl
      font-bold
      uppercase
      mx-8
    `}
`;

const MoviesRow = styled.div`
  ${tw`
      flex
      overflow-x-auto
      mt-4
      p-4
    `}
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MoviesPoster = styled.img`
  ${tw`
    m-2
    w-40
  `}
  transition: all 0.2s;
  &:hover {
    transform: scale(1.09);
  }
`;

function Movies({ title, movies }) {
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.map((movie) => (
          <MoviesPoster
            key={movie.id}
            src={"https://image.tmdb.org/t/p/w300" + movie.poster_path}
            alt={movie.name}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;
