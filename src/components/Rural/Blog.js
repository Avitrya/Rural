import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './BlogDir/Header';
import MainFeaturedPost from './BlogDir/MainFeaturedPost';
import FeaturedPost from './BlogDir/FeaturedPost';
import Main from './BlogDir/Main';
import Sidebar from './BlogDir/Sidebar';
import Footer from './BlogDir/Footer';
import post1 from './BlogDir/blog-post1.md';
import post2 from './BlogDir/blog-post2.md';
import post3 from './BlogDir/blog-post3.md';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Text",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'Text',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'Text',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2021', url: '#' },
    { title: 'February 2021', url: '#' },
    { title: 'January 2021', url: '#' },
    { title: 'November 2021', url: '#' },
    { title: 'October 2021', url: '#' },
    { title: 'September 2021', url: '#' },
    { title: 'August 2021', url: '#' },
    { title: 'July 2021', url: '#' },
    { title: 'June 2021', url: '#' },
    { title: 'May 2021', url: '#' },
    { title: 'April 2021', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Title Story" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="Placeholder Footer" />
    </React.Fragment>
  );
}