const blogs = [
  {
    likes: 10,
    title: 'First class tests',
    author: 'Robert C. Martin',
    url:
      'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    date: '2019-08-16T07:06:24.161Z',
    user: {
      username: 'jojo',
      name: 'Fresh',
      id: '5d563a7ce8697465953c902e'
    },
    id: '5d5655f03550de66d07208d2'
  },
  {
    likes: 10,
    title: 'hope it workes',
    author: 'tyvoiax emma',
    url: 'testing.io',
    date: '2019-08-19T02:46:20.478Z',
    user: {
      username: 'jojo',
      name: 'Fresh',
      id: '5d563a7ce8697465953c902e'
    },
    id: '5d5a0d7c8b547e8a660eec67'
  },
  {
    likes: 0,
    title: 'ty made it',
    author: 'success ty',
    url: 'money.io',
    date: '2019-08-20T22:43:39.377Z',
    user: {
      username: 'kojo',
      name: 'Emma',
      id: '5d563b7ee8697465953c902f'
    },
    id: '5d5c779b48b87006e5d0b565'
  },
  {
    likes: 0,
    title: 'building personal brand',
    author: 'emmanuel',
    url: 'emm.io',
    date: '2019-08-20T22:52:13.614Z',
    user: {
      username: 'kojo',
      name: 'Emma',
      id: '5d563b7ee8697465953c902f'
    },
    id: '5d5c799d48b87006e5d0b566'
  },
  {
    likes: 1,
    title: 'machines',
    author: 'abeuti',
    url: 'mooo.io',
    date: '2019-08-20T22:59:47.589Z',
    user: {
      username: 'kojo',
      name: 'Emma',
      id: '5d563b7ee8697465953c902f'
    },
    id: '5d5c7b6348b87006e5d0b567'
  },
  {
    likes: 0,
    title: 'testing',
    author: 'testing',
    url: 'testing',
    date: '2019-08-21T00:21:51.450Z',
    user: {
      username: 'kojo',
      name: 'Emma',
      id: '5d563b7ee8697465953c902f'
    },
    id: '5d5c8e9fca3a7d0f143e736c'
  },
  {
    likes: 0,
    title: 'testing5',
    author: 'testing5',
    url: 'testing5',
    date: '2019-08-21T00:29:03.120Z',
    user: {
      username: 'kojo',
      name: 'Emma',
      id: '5d563b7ee8697465953c902f'
    },
    id: '5d5c904fa848830f27051507'
  }
];

let token = null;
const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = () => Promise.resolve(blogs);

export default { getAll, setToken };
