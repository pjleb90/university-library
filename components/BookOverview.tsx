import React from 'react'
import { Button } from './ui/button';
import Image from 'next/image';
import BookCover from './BookCover';

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className='book-overview'>
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>{author}</p>
          <p>{genre}</p>
          <p>{rating}</p>
        </div>
        <div className="book-copies">
          <p>
            Total Copies: <span>{total_copies}</span>
          </p>
          <p>
            Available Copies: <span>{available_copies}</span>
          </p>
        </div>
        <p className="book-description">{description}</p>
        <Button className='book-overview-btn'>
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">Borrow Book</p>
        </Button>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className='relative'>
          <BookCover
            variant="wide"
            className="z-10"
            coverColor={color}
            coverImage={cover}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <BookCover
              variant="wide"
              coverColor={color}
              coverImage={cover}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookOverview