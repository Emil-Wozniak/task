export interface CarouselItem {
  title: string;
  src: string;
}

/**
 * Icons from https://devicon.dev/
 */
export const Languages: Array<CarouselItem> = [
  { title: 'Java', src: 'devicon-java-plain-wordmark colored' },
  { title: 'Javascript', src: 'devicon-javascript-plain colored' },
  { title: 'HTML', src: 'devicon-html5-plain-wordmark colored' },
  { title: 'CSS', src: 'devicon-css3-plain-wordmark colored' },
  { title: 'LESS', src: 'devicon-less-plain-wordmark colored' },
  { title: 'TS', src: 'devicon-typescript-plain colored' },
];

export const Frameworks: Array<CarouselItem> = [
  { title: 'React', src: 'devicon-react-original-wordmark colored' },
];

export const Databases: Array<CarouselItem> = [
  { title: 'Mongo', src: 'devicon-mongodb-plain-wordmark colored' },
  { title: 'MySql', src: 'devicon-mysql-plain-wordmark colored' },
];

export const Tools: Array<CarouselItem> = [
  { title: 'Webpack', src: 'devicon-webpack-plain colored' },
  { title: 'Yarn', src: 'devicon-yarn-plain colored' },
  { title: 'Git', src: 'devicon-git-plain-wordmark colored' },
  { title: 'Gitlab', src: 'devicon-gitlab-plain-wordmark colored' },
  { title: 'IDEA', src: 'devicon-intellij-plain colored' },
  { title: 'NodeJS', src: 'devicon-nodejs-plain-wordmark colored' },
];
