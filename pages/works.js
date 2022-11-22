/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Intro = styled.div`
  opacity: 0.8;
  background: teal;
  padding: 35px;
  grid-area: rs;
  margin-top: 40px;
  h4 {
    font-size: 30px;
    color: #000;
    padding-bottom: 10px;
    display: flex;
  }
  p {
    font-size: 22px;
    color: #000;
  }
  a {
    color: #000;
    text-decoration: underline;
    margin: 0 8px;
  }
  a:hover {
    color: aquamarine;
    transition: 2s;
  }

  @media only screen and (max-width: 1024px) {
    h4 {
      font-size: 27px;
    }
    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 834px) {
    margin-left: 40px;
    margin-top: 50px;
  }
  @media only screen and (max-width: 768px) {
    margin-left: 10px;
    // margin-top: 50px;
  }

  @media only screen and (max-width: 600px) {
    margin-top: 40px;
  }
`;

export const PageTitle = styled.h2`
  width: 100%;
  padding: 70px 80px 50px;
  margin-bottom: 30px;
  font-size: 30px;
  text-align: left;
  opacity: 0.8;
  background: teal;
  color: #000;
  text-shadow: 1px 1px 1px rgb(0, 123, 165);

  @media only screen and (max-width: 1024px) {
    padding-left: 35px;
    margin-bottom: 20px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    padding: 30px;
    margin-right: 20px;
  }
`;

const Wrapper = styled.div`
  // background: green;
  padding: 20px 70px 0 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4em;
  a {
    color: #000;
    text-decoration: none;
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 30px 0px 10px;
    grid-gap: 1em;
  }

  @media only screen and (max-width: 531px) {
    padding: 20px 0;
    margin: 30px 10px;
  }
`;

export const Website = styled.div`
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 40px auto;

  &:hover {
    opacity: 0.8;
  }
  a {
    color: #000;
  }

  @media only screen and (max-width: 834px) {
    margin-right: 25px;
  }

  @media only screen and (max-width: 600px) {
    margin-right: 15px;
  }
`;
export const TopContent = styled.div`
  // background: teal;
  padding: 10px 10px 15px;
`;

export const WebsiteTitle = styled.h3`
  font-size: 30px;
  color: #000;
  padding: 3px 0;

  &:hover {
    transition: 1s;
    color: rgb(0, 123, 165);
  }

  @media only screen and (max-width: 1024px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1024px) {
    font-size: 22px;
  }
`;

export const WebsiteDescription = styled.span`
  font-size: 20px;
  text-align: center;
  color: #000;
`;

export const ImageScreenshot = styled.div`
  .website-screenshot {
    border: solid 2px black;
    border-radius: 5px;

    @media only screen and (max-width: 1024px) {
      height: 300px;
    }

    @media only screen and (max-width: 810px) {

    }
  }
  }
`;

export const LeftSection = styled.div`
  grid-area: left;
`;

const featuredWebsites = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Elsa Hovey- Works</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Intro>
          {/* <h4>
            Hi there,
            <div style={{ marginLeft: "5px" }}>{"I'm"}</div>
            <Link href="/#about">Elsa.</Link>
          </h4>
          <p>
            Im a web developer based in Joshua Tree, CA. I create niche websites
            and solutions for small business owners and creatives.{" "}
          </p> */}
          {/* <br /> */}
          <p style={{ paddingTop: "8px", fontSize: "22px" }}>
            Listed below are some of my featured websites... feel free to look
            around!
          </p>
        </Intro>

        <Wrapper>
          {posts &&
            posts.map((post, index) => (
              <span key={index}>
                <a target="_blank" href={post.projectLink} rel="noreferrer">
                  <Website>
                    <TopContent>
                      <WebsiteTitle>{post.websiteTitle}</WebsiteTitle>
                      <WebsiteDescription>
                        -{post.description}
                      </WebsiteDescription>
                    </TopContent>

                    <ImageScreenshot>
                      <img
                        width="100%"
                        height="100%"
                        className="website-screenshot"
                        src={urlFor(post.websiteImg)}
                        alt=""
                      />
                    </ImageScreenshot>
                  </Website>
                </a>
              </span>
            ))}
        </Wrapper>
      </motion.div>
    </>
  );
};

export default featuredWebsites;

export const getServerSideProps = async () => {
  const query = '*[_type == "websites"]';
  const posts = await sanityClient.fetch(query);
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};
