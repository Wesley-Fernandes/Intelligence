import type { Feature } from '@/constants/features';
import { Check } from 'lucide-react';
import React from 'react';

export default function Feature({ description, title }: Feature) {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-600 text-gray-50">
          <Check />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
          {title}
        </h4>
        <p className="mt-2 dark:text-gray-600">{description}</p>
      </div>
    </div>
  );
}
