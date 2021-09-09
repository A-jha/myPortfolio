import React from "react"
import Layout from "../components/layout/Layout"
import {
  Typography,
  Button,
  Grid,
  makeStyles,
  TextField,
  Paper,
  InputBase,
  FormControl,
} from "@material-ui/core"
import { StaticImage } from "gatsby-plugin-image"
import FeaturedProjects from "../components/utils/FeaturedProjects"
export default function Contact({ projects }) {
  const classes = useStyles()
  return (
    <Layout>
      <div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={7}>
            <Typography></Typography>
            <StaticImage
              src="../assets/images/Mailbox-bro.png"
              alt="mail-box"
              className={classes.mailBox}
              layout="constrained"
              align="center"
            />
          </Grid>
          <Grid x={12} md={5}>
            <Paper>
              <InputBase />
              <TextField
                id="outlined-multiline-static"
                label="Feedback"
                multiline
                rows={4}
                defaultValue="Share your thoughts or Ideas or Reviews"
                variant="outlined"
                fullWidth
              />
            </Paper>
          </Grid>
        </Grid>
        <FeaturedProjects />
      </div>
    </Layout>
  )
}

const Info = () => {
  const classes = useStyles()
  return <div></div>
}

const useStyles = makeStyles(theme => ({
  mailBox: {
    margin: "auto",
  },
}))
