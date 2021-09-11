import React, { useState } from "react"
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
import SendIcon from "@material-ui/icons/Send"
import { StaticImage } from "gatsby-plugin-image"
import FeaturedProjects from "../components/utils/FeaturedProjects"
export default function ContactPage({ projects }) {
  const classes = useStyles()
  return (
    <Layout>
      <div>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6} className={classes.container}>
            <Typography></Typography>
            <StaticImage
              src="../assets/images/Mailbox-bro.png"
              alt="mail-box"
              className={classes.mailBox}
              layout="constrained"
              align="center"
              placeholder="tracedSVG"
            />
          </Grid>
          <Grid x={12} md={5}>
            <Contact />
          </Grid>
        </Grid>
        <FeaturedProjects />
      </div>
    </Layout>
  )
}

const Contact = () => {
  const [value, setValue] = useState("")
  const classes = useStyles()
  return (
    <div>
      <Paper elevation={4} className={classes.contactPaper}>
        <Typography align="center" variant="h5">
          Please Share something
        </Typography>
        <div className={classes.smallBar}></div>
        <TextField
          variant="outlined"
          fullWidth
          className={classes.input}
          label="Full Name"
        />
        <TextField
          variant="outlined"
          fullWidth
          className={classes.input}
          label="email"
        />
        <TextField
          className={classes.input}
          id="outlined-multiline-static"
          label="Feedback"
          multiline
          rows={4}
          value={value}
          fullWidth
          defaultValue={value}
          onChange={e => {
            setValue(e.target.value)
          }}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<SendIcon />}
          fullWidth
        >
          Send
        </Button>
      </Paper>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  mailBox: {
    margin: "auto",
  },
  contactPaper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3, 3, 3, 3),
    borderRadius: "1rem",
  },
  input: {
    margin: theme.spacing(2, 2, 2, 0),
  },
  smallBar: {
    width: "4rem",
    height: ".3rem",
    background: "red",
    margin: "1rem auto 0 auto",
  },
}))
