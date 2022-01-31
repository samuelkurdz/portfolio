
export interface Post {
  title: string;
  introduction: string;
  views: number;
  createdDate: string;
  link: string;
}

export const posts: Post[] = [
  {
    title: 'Empathy feedback',
    introduction: 'How the role of empathy can impact a bad feedback.',
    views: 30,
    createdDate: 'Monday, January 3, 2022',
    link: 'empathy-feedback'
  },
  {
    title: '2021 in Review',
    introduction: 'A review of how my 2021 went by.',
    views: 170,
    createdDate: 'Thursday, November 25, 2021',
    link: '2021-in-review'
  },
  {
    title: ' Dictionary in JavaScript',
    introduction: 'How the role of empathy can impact a bad feedback.',
    views: 31,
    createdDate: 'Sunday, December 19, 2021',
    link: 'dictionary-in-javascript'
  },
  {
    title: 'Empathy feedback',
    introduction: 'How to create a dictionary in JavaScript, one of the most useful approach I use',
    views: 54,
    createdDate: 'Saturday, November 24, 2021',
    link: 'empathy-JavaScript'
  },
  {
    title: 'Junior vs. Senior Developer',
    introduction: ' Diving into the responsibilities of junior and senior developers.',
    views: 20,
    createdDate: 'Saturday, December 11, 2021',
    link: 'junior-vs-senior-developer'
  },
]