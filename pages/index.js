import Head from "next/head";
import ContainerBlock from "../layout/ContainerBlock";
import Hero from "../components/Hero";
// import getLatestRepos from "@lib/getLatestRepos";
import DevProfiles from '../components/DevProfiles'
export default function Home({ repositories }) {
 
  return (
    <ContainerBlock
      title="Prajwal Kulkarni - Developer, Writer, Creator"
      description="Developer portfolio website built with nextJS."
    >
      <Hero />
      <DevProfiles/>
      
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   console.log(process.env.GITHUB_AUTH_TOKEN);
//   let token = process.env.GITHUB_AUTH_TOKEN;

//   const repositories = await getLatestRepos(userData, token);
//   // console.log("REPOSITORIES", repositories);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };