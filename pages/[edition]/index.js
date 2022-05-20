import SyllabusTemplate from "../../components/SyllabusTemplate";
import { getAllEditionsId, getEditionData } from "../../lib/load-editions";

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllEditionsId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.edition
  const postData = await getEditionData(params.edition);
  return {
    props: {
      postData,
    },
  };
}

export default function Edition({postData}) {
  return <SyllabusTemplate data={postData}/>
}