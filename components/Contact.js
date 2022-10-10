import Head from "next/head";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";

export const ContentWrapper = styled.div`
  font-weight: bold;
  // background: maroon;
  text-align: right;
  padding: 20px 10px;
  border-top: solid 2px black;
`;

export const CTA = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 10px;

  a {
    font-size: 25px;
    // margin: 20px 10px;
    color: #000;
    text-decoration: none;
  }
  a:hover {
    color: #3aa1aa;
    transition: 1s;
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      font-size: 20px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  color: black;
  text-decoration: underline;
  padding: 0 10px;

  @media only screen and (max-width: 1024px) {
    font-size: 35px;
  }
`;

export const SmIcons = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 22px;
    padding: 10px 0;
  }

  a {
    color: #000;
    margin: 5px;
    font-size: 22px;
    text-decoration: none;
    &:hover {
      color: #3aa1aa;
      transition: 1s;
    }
  }
`;

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapper id="contact">
        <Title>Contact</Title>
        <CTA>
          <a href="mailto:devdesignsbyelsa@gmail.com">
            devdesignsbyelsa@gmail.com
          </a>

          <SmIcons>
            <p>You can also find me on:</p>
            <a className="sm-icon" href="http://github.com/elsahv">
              <FaGithub /> Github
            </a>
            <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey">
              <FaLinkedin /> LinkedIn
            </a>
            <a
              className="sm-icon"
              href="https://www.instagram.com/elsahoveydevdesign/"
            >
              <FaInstagram /> Instagram
            </a>
          </SmIcons>
        </CTA>
      </ContentWrapper>
    </>
  );
};
export default Contact;
