
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby"
import "./blog.scss"


export default function Blog({data}) {
    const { html, frontmatter: {title} } = data.markdownRemark

    return (
        <Layout>
            <h1>{title}</h1>
            <div className="blog-content">
            <div dangerouslySetInnerHTML={{__html: html}}></div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter  {
                title
            }
        }

    }
`