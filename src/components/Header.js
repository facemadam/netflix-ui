import React, { useState, useEffect } from "react";
import tw, { styled } from "twin.macro";

const HeaderContainer = styled.div`
  ${tw`
    flex
    justify-between
    fixed
    top-0
    w-full
    transition-all
    z-10
  `}
  ${(props) => (props.dark ? tw`bg-black` : tw`bg-transparent`)}
  img {
    ${tw`
      h-8
      p-4
    `}
  }
`;

function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <HeaderContainer dark={isDark}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </HeaderContainer>
  );
}

export default Header;
