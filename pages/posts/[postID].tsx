import React from "react";
import { NextPage, GetServerSideProps } from "next";

interface Props {
    id: string
}

const Post: NextPage<Props> = ({ id }) => {
    return (
        <h1>{id}</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query

    return { props: { id } }
    
}

export default Post;
