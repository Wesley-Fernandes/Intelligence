import { blogs } from '@/constants/blogs';
import React from 'react';
import Blog from './Blog';

export default function Blogs() {
  return (
    <section className="py-6 sm:py-12" id='atualidades'>
      <div className="container p-6 mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold">Atualizações recentes</h2>
          <p className="font-serif text-sm text-gray-600">
            Nossas postagens mais recentes
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {blogs.map((blog) => {
            return <Blog key={blog.id} {...blog} />;
          })}
        </div>
      </div>
    </section>
  );
}
