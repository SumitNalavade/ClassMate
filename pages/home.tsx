import React from "react";
import { NextPage, GetServerSideProps } from "next";

import supabase from "../config/supabase";

import Layout from "../components/layout";
import PostCard from "../components/postCard";

interface Props {
  posts: any[]
}

const Home: NextPage<Props> = ({ posts }) => {
    return (
        <Layout>
            <div className="h-screen p-12 container">
              <div className="flex flex-wrap items-center">
                {posts.map((post) => (
                  <PostCard course={post} />
                ))}
              </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({  }) => {
  let { data: posts, error } = await supabase
  .from('post')
  .select('*')

  return { props: { posts } }
  
}


export default Home;