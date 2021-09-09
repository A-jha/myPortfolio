import React from "react"
import Layout from "../components/layout/Layout"
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  CssBaseline,
} from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import Skills from "../components/skills/index"
import { graphql, Link } from "gatsby"
import FeaturedProjects from "../components/utils/FeaturedProjects"
export default function Home() {
  return (
    <Layout>
      <CssBaseline />
      <div className="main">
        <Main />
      </div>
      <Skills />
      <FeaturedProjects />
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
              <Link to="/contact"> Contact Me</Link>
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.btn}
            >
              <a href="#" style={{ color: "black" }}>
                {" "}
                More About Me
              </a>
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

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: "center",
    margin: theme.spacing(2, 1, 1, 1),
  },
  hello: {
    textAlign: "center",
    color: "rgba(123, 12, 34, 0.8),",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1, 1, 1, 1),
  },
  btn: {
    margin: theme.spacing(0, 1, 0, 1),
  },
  profilePic: {
    alignSelf: "center",
    borderRadius: "2rem",
    borderBottomLeftRadius: "25%",
    // border: "2px solid blue",
    margin: theme.spacing(2),
    boxShadow: " inset 2px 2px 2px 2px black",
    borderBottom: "solid 5px blue",
  },
  card: {
    margin: "0.5rem",
    padding: "1.2rem",
    fontSize: "1.3rem",
  },
  bottomBar: {
    width: "10rem",
    height: "5px",
    background: "red",
    margin: "0rem auto 2rem auto",
  },
  skillTitle: {
    letterSpacing: "5px",
    marginBottom: "0",
  },
  featuredHeader: {
    marginTop: "2rem",
  },
}))
