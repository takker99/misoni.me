import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <h1>About</h1>
      <section id="me">
        <h2>お前は誰?</h2>
        <p>Misoni という HN で活動している人間。</p>
      </section>
      <section id="this">
        <h2>このサイトは何?</h2>
        <p>
          Misoni himself
          の個人サイト。最近、個人サイトを持つ・個人サイトに回帰する人が増えた気がするので、その流れに乗って作ってみた。Gatsby
          (React) で書き、Netlify
          でホスティングしている。このサイトでは特にテーマを決めることはせず、怪文書やら何やら、ブログ的なものを書いていくつもり。ちなみに、サイト名は細野晴臣の楽曲「僕は一寸」(HOSONO
          HOUSE 収録) から。
        </p>
      </section>
      <section id="links">
        <h2>リンクなど</h2>
        <p>自分が使っているSNSなどのリンク</p>
        <ul>
          <li>
            <a
              href="https://scrapbox.io/MISONLN41/"
              target="blank"
              rel="nofollow noopener noreferrer external"
            >
              Scrapbox (/MISONLN41)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MISONLN41/"
              target="blank"
              rel="nofollow noopener noreferrer external"
            >
              GitHub (@MISONLN41)
            </a>
          </li>
          <li>
            <a
              href="https://discord.com"
              target="blank"
              rel="nofollow noopener noreferrer external"
            >
              Discord (Misoni#8554)
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/MISONLN41/"
              target="blank"
              rel="nofollow noopener noreferrer external"
            >
              Twitter (@MISONLN41)
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
