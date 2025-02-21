import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { db } from "@/database/drizzle";
import { books } from "@/database/schema";
import { auth } from "@/auth";
import { desc } from "drizzle-orm";

const Library = async () => {
  const session = await auth();

  const allBooks = (await db
    .select()
    .from(books)
    .limit(100)
    .orderBy(desc(books.createdAt))) as Book[];

  return (
    <>
      <section className="book-overview">
        <div className="flex flex-1 flex-col gap-5">
          <h1>Choose from dozens of highly reviewed books</h1>
        </div>
      </section>
      <BookList
        title="______"
        books={allBooks}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Library;