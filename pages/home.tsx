import React, { useEffect, useState } from "react";
import Link from "next/link";
import { NextPage, GetServerSideProps } from "next";
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../config/firebase";

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
                  <Link href="/details">
                    <PostCard course={post} />
                  </Link>
                ))}
              </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({  }) => {
    const q = query(collection(db, "posts"));
    const querySnapshot = await getDocs(q).then((res) => res.docs.map((doc) => doc.data()))

    return { props: { posts : querySnapshot } }
  
}


export default Home;