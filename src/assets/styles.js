import styled from "styled-components";

export const Wrapper = styled.div`
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export const HomeContainer = styled.main`
  max-width: 1700px;
  position: relative;
`;

export const HeaderContainer = styled.div`
  /* mobile size */
  padding: 15px 24px;
  padding-bottom: 0;
  height: 46px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  .logo {
    font-size: 20px;
    font-weight: 600;
  }

  .collection {
    display: none;
  }

  button {
    font-weight: 700;
    font-size: 24px;
  }

  .desktop {
    display: flex;
    box-shadow: 0px 5px 15px rgba(153, 153, 153, 0.05);
    justify-content: space-between;
    align-items: center;
    height: 56px;

    .nav__links {
      display: flex;
      gap: 42px;
    }
  }

  /* desktop size */
  @media (min-width: 768px) {
    padding: 17px 73px;
    padding-bottom: 0;
    .collection {
      display: block;
    }
  }

  /* maximum screen size */
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    justify-content: center;

    .desktop {
      width: 1700px;
    }
  }
`;
