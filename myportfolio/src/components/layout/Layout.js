import React from "react"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import HomeIcon from "@material-ui/icons/Home"
import ContactIcon from "@material-ui/icons/ContactMail"
import ProjectIcon from "@material-ui/icons/Work"
import MailIcon from "@material-ui/icons/Mail"
import { Feedback, Subscriptions } from "@material-ui/icons"
import SuggestionIcon from "@material-ui/icons/CommuteTwoTone"
import NavBar from "./Navbar"
import Footer from "./Footer"
import "../../assets/css/main.css"
import { Link } from "gatsby"
import { FaUserFriends } from "react-icons/fa"
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: "#444",
    maxHeight: "80px",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  dropdownMenu: {
    flexBasis: "auto",
  },
  logo: {
    flexGrow: 1,
    textAlign: "center",
  },
  listItemText: {
    color: "#444",
  },
}))

export default function PersistentDrawerLeft({ children, title }) {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.logo}>
            {title || "Avinash"}
          </Typography>
          <div className={classes.dropdownMenu}>
            <NavBar />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" className={classes.listItemText} />
            </ListItem>
          </Link>
          <Link to="/projects">
            <ListItem button>
              <ListItemIcon>
                <ProjectIcon />
              </ListItemIcon>
              <ListItemText
                primary="Projects"
                className={classes.listItemText}
              />
            </ListItem>
          </Link>
          <Link to="/contact">
            <ListItem button>
              <ListItemIcon>
                <ContactIcon />
              </ListItemIcon>
              <ListItemText
                primary="Contact"
                className={classes.listItemText}
              />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          {/* {["Recent Work", "Feedback", "Suggestions"].map((text, index) => ( */}
          <ListItem button>
            <ListItemIcon>
              <FaUserFriends />
            </ListItemIcon>
            <ListItemText primary="MyFriends" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Feedback />
            </ListItemIcon>
            <ListItemText primary="Feedback" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Subscriptions />
            </ListItemIcon>
            <ListItemText primary="Subscribe" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
        <Footer />
      </main>
    </div>
  )
}
