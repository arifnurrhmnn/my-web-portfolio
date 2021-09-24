import Layout from "../components/Layout/Layout";
import Project from "../components/Pages/Project";
import { DataProjects } from "../Data/data";

export default function project({ ProjectLists }) {
  return (
    <>
      <Layout title="Project">
        <Project DataProjectList={ProjectLists} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      ProjectLists: DataProjects,
    },
  };
}
