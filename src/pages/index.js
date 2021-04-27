import React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import Posts from "../templates/Posts"

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Posts />
    </Layout>
  )
}
