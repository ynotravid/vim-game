import * as React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () => (
  <Layout>
    <Seo title="Vim Game" />
    <h1>VIM Game</h1>
    <p>
      <Link to="/about/">About VIM Game</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
