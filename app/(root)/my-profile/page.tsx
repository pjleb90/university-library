import React from "react";
import { Button } from "@/components/ui/button";
import { db } from "@/database/drizzle";
import { signOut } from "@/auth";
import { books, users } from "@/database/schema";
import BookList from "@/components/BookList";
import { desc } from "drizzle-orm";

const Page = async () => {
  const latestBooks = (await db
    .select()
    .from(books)
    .limit(10)
    .orderBy(desc(books.createdAt))) as Book[];
  return (
    <>
      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className="mb-10"
      >
        <Button>Logout</Button>
      </form>

      {/* <BookList title="Borrowed Books" books={sampleBooks} /> */}
      <BookList
        title="Latest Books"
        books={latestBooks.slice(1)}
        containerClassName="mt-28"
      />
    </>
  );
};
export default Page;