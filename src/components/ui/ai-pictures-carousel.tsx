'use client';

import { FramerCarousel, CarouselItem } from './framer-carousel';
import { extractPromptFromFilename } from './carousel-utils';

// List of AI picture files from public/aipic/
const aiPictureFiles = [
  '1.png',
  '4.png',
  '6.png',
  'Untitled10.png',
  'Untitled11.png',
  'Untitled12.png',
  'Untitled13.png',
  'Untitled14.png',
];

const pictureItems: CarouselItem[] = aiPictureFiles.map((filename, index) => ({
  id: index + 1,
  url: `/aipic/${filename}`,
  title: extractPromptFromFilename(filename),
  type: 'image' as const,
}));

export function AIPicturesCarousel() {
  return (
    <div className="w-full">
      <FramerCarousel items={pictureItems} height="h-[600px]" />
    </div>
  );
}


