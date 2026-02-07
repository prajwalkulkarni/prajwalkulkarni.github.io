import ContainerBlock from "../layout/ContainerBlock";
import Hero from "../components/Hero";
// import getLatestRepos from "@lib/getLatestRepos";
import DevProfiles from "../components/DevProfiles";
export default function Home() {
  return (
    <ContainerBlock
      title="Prajwal Kulkarni - Developer, Writer, Creator"
      description="Developer portfolio website built with nextJS."
    >
      <Hero />
      <DevProfiles />
    </ContainerBlock>
  );
}
