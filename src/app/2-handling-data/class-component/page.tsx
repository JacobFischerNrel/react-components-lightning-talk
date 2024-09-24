'use client';

import DisplayBook from '@/components/DisplayBook';
import type { Book } from '@/data/getBook';
import React from 'react';

interface HandlingDataClientComponentState {
  books: ReadonlyArray<Book> | null;
  isLoading: boolean;
}

export default class HandlingDataClassComponent extends React.Component<
  Record<string, never>,
  HandlingDataClientComponentState
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      books: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch('/api/getBooks')
      .then((res) => res.json())
      .then((rawData) => {
        this.setState({ isLoading: false });
        this.setState({ books: rawData as ReadonlyArray<Book> });
      })
      .catch(() => {
        this.setState({ isLoading: false, books: null });
      });
  }

  render() {
    const { isLoading, books } = this.state;

    if (isLoading) {
      return <em>Loading...</em>;
    }

    if (!books) {
      return <strong>Error: could not load books</strong>;
    }

    return (
      <ul>
        {books.map((book) => (
          <li key={book.title}>
            <DisplayBook {...book} />
          </li>
        ))}
      </ul>
    );
  }
}
