import styled from "styled-components";

export const Button = styled.div`
  background-color: #ffe970;
  color: #201d46;
  max-width: 150px;
  padding: 15px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 20px;

  &:hover{
    opacity:0.8;
    cursor: pointer;
  }
`;

export const FlexBox = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
margin-bottom: 10px;
`;

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
  margin-bottom: 50px;

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

export const ProductContainer = styled.section`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
    max-width: 250px;
  }
  .gallery {
    .box {
      margin-top: 20px;
      min-height: 450px;
      border-radius: 25px;

      .image {
        position: relative;
        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
        }

        button {
          position: absolute;
          width: 75%;
          bottom: 5px;
          right: 0px;
          color: #201d46;
          background-color: #e6e6e6;
          padding: 15px 15px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.5s ease-in-out;
          &:hover {
            cursor: pointer;
            width: 100%;
            text-transform: uppercase;
            color: #ededdd;
            background-color: #201d46;
          }
        }
      }
      .bottom {
        padding: 10px;
        h4 {
          font-size: 18px;
          font-weight: 600;
          margin-top: 5px;
          margin-bottom: 5px;
          text-transform: capitalize;
        }
        p {
          /* text-align: center; */
        }
        .flexbox {
          display: flex;
          justify-content: space-between;
          margin-top: 5px;

          .price {
            font-size: 16px;
            font-weight: 600;
          }
        }
      }
    }
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 36px;
      max-width: 350px;
      line-height: 32px;
      margin-bottom: 20px;
    }

    .gallery {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 40px;
      .box {
        max-width: 260px;
        border: 1px solid #e6e6e6;
      }
    }
  }
`;

export const FilterContainer = styled.section`
  background-color: #e6e6e6;
  width: 90%;
  padding: 10px 15px;
  margin: 0 24px;
  margin-top: 20px;

  input {
    display: inline;
    margin-left: 2px;
  }

  input,
  select {
    width: 100%;
    max-width: 250px;
    padding: 5px 10px;
    height: 40px;
    border: transparent;
    outline: none;
    border-radius: 12px;

    &:focus,
    &:active {
      border: 1px solid gray;
      outline: none;
    }
  }

  label {
    font-size: 14px;
    color: #201d46;
    width: max-content;
  }

  .group {
    display: flex;
    max-width: 280px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;

    select {
      max-width: 150px;
      margin-left: 10px;
      height: 40px;
    }
  }

  @media (min-width: 680px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    padding: 10px;
    margin-bottom: 30px;

    .group {
      display: flex;
      width: 350px;
      align-items: center;
      justify-content: center;

      select {
        max-width: 150px;
        margin-left: 10px;
      }
    }
  }
`;

export const RatingsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  justify-content: center;
  .rate {
    max-width: 100px;
    margin-left: 5px;
  }
  .show {
    display: inline;
  }
  .hide {
    display: none;
  }
`;

export const CartContainer = styled.section`
padding: 24px;
margin-bottom: 50vh;

h1 {
  margin: 50px auto;
  margin-left: 50px;
}

.group {
  .wrapper {
    overflow: scroll;
    table {
      width: 50vw;
      text-align: center;
      border-collapse: collapse;
      overflow: scroll;
      tr {
        border: 1px solid gray;
      }
      th,
      td {
        padding: 10px;
      }
      input {
        padding: 5px;
        width: 30px;
        text-align: center;
      }
      thead {
        margin-bottom: 25px;
      }
      td.delete {
        button {
          background-color: #201d46;
          padding: 5px 15px;
          color: white;
          font-size: 14px;
        }
      }
      td.flexbox {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;
        width: max-content;

        img {
          object-fit: cover;
          width: 60px;
          height: 60px;
          margin-right: 5px;
        }
      }
    }
    button {
      justify-self: flex-start;
      margin: 20px auto;
    }
  }

  .total {
    margin-top: 20px;
    margin-bottom: 20px;
    h3 {
      margin-bottom: 20px;
    }
  }
}

@media (min-width: 650px) {
  .group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;
  }
  .container {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    button {
      justify-self: flex-start;
    }
  }
}
`;

export const SuccessContainer = styled.header`
  height: 70vh;
  margin: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    border-radius: 30px;
    background-color: #ffe970;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 15px;
    width: 100%;
    max-width: 700px;
    padding: 15px;
    min-height: 40vh;

    button {
      background-color: #201d46;
      color: #ffe970;
      padding: 20px 45px;
      font-size: 14px;
      font-weight: 600;
      border-radius: 20px;
      margin: 25px auto;
    }
  }

  @media (min-width: 768px) {
    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px;
      width: 70vw;
      height: 50vh;
    }
  }
`;

export const FooterContainer = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  border-top: 1px solid #e8e8e8;
  margin-top: 100px;
  padding-top: 10px;
  text-align: center;
  width: 100%;
  height: 30px;
  a {
    font-style: cursive;
    font-weight: 600;
    text-decoration: underline;
  }
  p {
    font-size: 14px;
    padding: 10px 0;
    font-weight: 500;
  }
`;
