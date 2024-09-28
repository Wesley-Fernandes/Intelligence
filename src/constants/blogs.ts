export interface Blog {
  id: string;
  title: string;
  thumbnail: string;
  category: string;
  href: string;
  date: Date;
  views: string;
}

export const blogs: Blog[] = [
  {
    id: 'blog-1',
    title: 'Edificio Salzburg',
    thumbnail: '/blogs/blog1.jpg',
    href: '',
    category: 'Technology',
    date: new Date('2022-01-01'),
    views: '1,000',
  },
  {
    id: 'blog-2',
    title: 'Condominio Duque',
    thumbnail: '/blogs/blog2.jpg',
    href: '/',
    category: 'Tutorial',
    date: new Date('2022-02-01'),
    views: '5,000',
  },
  {
    id: 'blog-3',
    title: 'Condominio Ceara',
    thumbnail: '/blogs/blog3.jpg',
    href: '/',
    category: 'Deployment',
    date: new Date('2022-03-01'),
    views: '3,000',
  },
  {
    id: 'blog-4',
    title: 'Edificio Connect',
    thumbnail: '/blogs/blog4.jpg',
    href: '/',
    category: 'News',
    date: new Date('2022-04-01'),
    views: '2,000',
  },
];
