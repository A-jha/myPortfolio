import React from "react"
import Layout from "../components/layout/Layout"
import { Typography, Paper, Button, Grid, Chip } from "@material-ui/core"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import Skills from "../components/skills/index"
import ProjectsSection from "../components/projects/index"
import useStyles from "../assets/styles/Index"
export default function Home() {
  return (
    <Layout>
      <div className="main">
        <Main />
      </div>
      <Skills />
      <ProjectsSection />
    </Layout>
  )
}
const Main = () => {
  const classes = useStyles()
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={8}>
        <section>
          <Typography variant="h4" className={classes.title}>
            I am Avinash and I am a Software Engineer
          </Typography>
          <Typography variant="h1" className={classes.hello}>
            Hello.
          </Typography>

          <div className={classes.btnContainer}>
            <Button variant="contained" color="primary" className={classes.btn}>
              Contact Me
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.btn}
            >
              More About Me
            </Button>
          </div>
        </section>
      </Grid>
      <Grid item>
        <StaticImage
          src="../assets/images/aj.jpg"
          alt="profile-pic"
          placeholder="tracedSVG"
          objectFit="contain"
          width={400}
          height={400}
          className={classes.profilePic}
        />
      </Grid>
    </Grid>
  )
}
