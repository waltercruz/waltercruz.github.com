import React from "react"

import Layout from "../components/layout"
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout>
    <img src={'headshot.jpg'} alt="Waltin" class="head" />
    <h1>Walter Cruz</h1>
    <a href="https://stoyca.com.br"><Button variant="contained" color="primary">Stoyca</Button></a>
  </Layout>
)

export default IndexPage
