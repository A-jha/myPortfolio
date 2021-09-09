import React from "react"
import { Grid, Typography, Chip } from "@material-ui/core"
import mySkills from "../../data/skills.json"
import useStyles from "./style"
const Skills = () => {
  const classes = useStyles()
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        className={classes.main}
      >
        <Grid item xs={10}>
          <Typography
            variant="h4"
            align="center"
            className={classes.skillTitle}
          >
            Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.bottomBar}></div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {mySkills["programming"].map((language, index) => {
          return (
            <Grid item key={index}>
              <Chip className={classes.chip} label={language} />
            </Grid>
          )
        })}
        {mySkills["frontend"].map((tag, index) => {
          return (
            <Grid item key={index}>
              <Chip key={index} className={classes.chip} label={tag} />
            </Grid>
          )
        })}
        {mySkills["apiDesign"].map((tag, index) => {
          return (
            <Grid item key={index}>
              <Chip key={index} className={classes.chip} label={tag} />
            </Grid>
          )
        })}
        {mySkills["database"].map((tag, index) => {
          return (
            <Grid item key={index}>
              <Chip key={index} className={classes.chip} label={tag} />
            </Grid>
          )
        })}
        {mySkills["machinelearning"].map((tag, index) => {
          return (
            <Grid item key={index}>
              <Chip key={index} className={classes.chip} label={tag} />
            </Grid>
          )
        })}
      </Grid>
    </>
  )
}

export default Skills
