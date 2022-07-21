import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Container from "../components/container"
import Image from '../components/Image';

export default function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Home`
  const siteDescription = data.site.siteMetadata.description
  const posts = data.allMdx.nodes
  // <h1 className="home-title"></h1>  <-- add titel
  /**
   * 
   */
  return (
    <Container>
      <SEO title={siteTitle} description={siteDescription} />
      <h1 className="home-title"></h1>
      <>
      <Image
        src="khaled-image.jpg"
        className="mx-auto shadow-xl"
        alt="Photo of Khaled Ihitt"
        style={{
          width: '190px',
        }}
      />
      </>
      <p>I'm a Software Developer and data science student who enjoys programming and data manipulation/visualization.
        My favorite technologies right now are: React.js, Machine Learning, Deep Learning, NoSQL databases.
      </p>

      <br></br>
      <p>Follow Me Online : </p>
      <ul>
        <li> <a class="a" href="https://twitter.com/KhaledEsc_" title="KhaledEsc_">Twitter</a></li>
        <li> <a class="a" href="https://github.com/5aled01" title="5aled01">GitHub</a></li>
        <li> <a class="a" href="https://www.linkedin.com/in/khaled-ihitt/" title="khaled-ihitt">LikedIn</a></li>
      </ul>

      <br></br>
      <p>Post: </p>
      {posts.map(post => {
        const title = post.frontmatter.title || post.fields.slug

        return (
          <div className="card" key={post.slug}>
            <Link className="card-link" to={post.slug}>
              <h1 className="card-title">{title}</h1>
              <p className="card-description">{post.frontmatter.description}</p>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "Do MMMM YYYY ")
          title
          description
        }
      }
    }
  }
`
