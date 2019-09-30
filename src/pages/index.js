import React from "react"

import Layout from "../components/layout"
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <Layout>
    <img src={'headshot.jpg'} alt="Waltin" class="head" />
    <p>@waltindead</p>
    <a href="http://bit.ly/stoycamusic"><Button variant="contained" color="primary" fullWidth>Stoyca</Button></a>
    <a href="http://bit.ly/2kSMK4G"><Button variant="contained" color="primary" fullWidth>soundcloud</Button></a>
  </Layout>
)

export default IndexPage
