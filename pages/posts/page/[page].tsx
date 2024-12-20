import Pagination from "@/components/Pagination/Pagination";
import SinglePost from "@/components/Post/SinglePost";
import { getNumberOfPages, getPostsByPage } from "@/lib/notionAPI";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPage = await getNumberOfPages();

  const params = [];
  for (let i = 1; i <= numberOfPage; i++) {
    params.push({ params: { page: i.toString() } });
  }

  return {
    paths: params,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const currentPage = context.params?.page;
  if (typeof currentPage !== "string" || isNaN(Number(currentPage))) {
    return {
      notFound: true, // or return a default value, depending on your requirement
    };
  }
  const postsByPage = await getPostsByPage(
    parseInt(currentPage.toString(), 10)
  );
  const numberOfPage = await getNumberOfPages();
  // console.log(numberOfPage);
  return {
    props: {
      postsByPage,
      numberOfPage,
    },
    revalidate: 60,
  };
};
type Post = {
  Name: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
};
type BlogPageListProps = {
  postsByPage: Post[]; // Array of Post objects
  numberOfPage: number; // Total number of pages
};

const BlogPageList = ({ postsByPage, numberOfPage }: BlogPageListProps) => {
  return (
    <div className="container h-full w-full mx-auto font-mono">
      <Head>
        <title>Hello, World.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container w-full mt-16">
        <h1 className="text-5xl font-medium text-center mb-16 ">
          ～Programming and etc.～
        </h1>
        <section className="sm:grid grid-cols-2 w-5/6 gap-3 mx-auto">
          {postsByPage.map((post: Post) => (
            <div key={post.slug}>
              <SinglePost
                Name={post.Name}
                description={post.description}
                date={post.date}
                tags={post.tags}
                slug={post.slug}
                isPaginationPage={true}
              />
            </div>
          ))}
        </section>
        <Pagination numberOfPage={numberOfPage} />
      </main>
    </div>
  );
};

export default BlogPageList;
