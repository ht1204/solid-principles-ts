import { Book } from './Book.ts';

interface RepositoryInterface<T> {
    save(entity: T): void;
}

export class BookRepository<T extends Book> implements RepositoryInterface<T> {
    save(book: Book): void {
        console.log(`Book Saved: ${book.getTitle}`);
    }
}
