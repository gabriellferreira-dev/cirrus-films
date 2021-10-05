import React from 'react';
import { HeaderButton } from '../styled-components/HeaderButton.style';
import { BsInfoCircle, BsPlayFill } from 'react-icons/bs';
import { MdFavoriteBorder } from 'react-icons/md';
import { PlayButton } from '../styled-components/PlayButton.style';
import { UserButton } from '../styled-components/UserButton.style';
import { CartButton } from '../styled-components/CartButton.style';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { StyledHeader } from '../styled-components/Header.style';

const Header = ({ movies }) => {
  const randomMovie = movies.sort(() => Math.random() - 0.5)[0];
  const posterPath = `http://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;

  return (
    <StyledHeader posterPath={posterPath}>
      <UserButton>
        <AiOutlineUser />
      </UserButton>
      <CartButton>
        <AiOutlineShoppingCart />
      </CartButton>
      <div>
        <HeaderButton type='button'>
          <MdFavoriteBorder />
          FAVORITAR
        </HeaderButton>
        <PlayButton>
          <BsPlayFill />
          TRAILER
        </PlayButton>
        <HeaderButton type='button'>
          <BsInfoCircle />
          info
        </HeaderButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
