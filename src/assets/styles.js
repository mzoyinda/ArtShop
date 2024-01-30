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

export const HeaderContainer = styled.header`
  /* mobile size */
  padding: 15px 24px;
  padding-bottom: 0;
  height: 46px;
  position: sticky;
  /* background-color: #ffffff; */
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
      align-items: center;
    justify-content: center;
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

export const Banner = styled.section`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 70vh;

  .wrapper {
    padding: 60px 24px;
    padding-bottom: 30px;
    .frame1,
    .frame2 {
      display: none;
    }

    h1 {
      font-size: 42px;
      letter-spacing: 0.3px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    p {
      font-size: 14px;
      font-weight: 500;
    }

    button {
      background-color: #ffe970;
      color: #201d46;
      padding: 15px 45px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 20px;
      margin: 25px auto;
    }
  }

  .gallery {
    position: relative;
    margin: 30px 0;
    width: 80vw;
    height: 250px;
    background-image: url("/frame.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;

    h2 {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      max-width: 460px;
      h1 {
        font-size: 72px;
        line-height: 70px;
        margin-bottom: 20px;
      }
      p {
        font-size: 16px;
      }

      .frame1,
      .frame2 {
        position: absolute;
        display: block;
        top: 150px;
        z-index: -1;
      }

      .frame1 {
        left: -32%;
        text-align: left;
      }
      .frame2 {
        top: 200px;
        right: -32%;
      }
    }
    .gallery {
      background-position: bottom;
      padding: 10px;
      height: 450px;

      h2 {
        position: absolute;
        display: block;
        bottom: 40px;
        font-size: 28px;
        font-weight: 600;
        left: 20px;
        background-color: #ffe970;
        letter-spacing: 1px;
        color: #201d46;
        border-radius: 10px;
        padding: 10px 20px;
      }
    }
  }
`;

export const ProductsContainer = styled.section`

`;

export const FooterContainer = styled.footer`
/* position: fixed;
bottom: 0; */
border-top:1px solid #E8E8E8;
margin-top: 300px;
padding-top: 10px;
text-align: center;
width: 100%;
height: 30px;
a{ 
      font-style:cursive;
      font-weight: 600;
    text-decoration: underline;
    }
p{
    font-size: 14px;
    padding: 10px 0;
    font-weight: 500;
}
`;