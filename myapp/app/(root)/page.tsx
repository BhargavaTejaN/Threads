
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/threads.action";
import { fetchUser } from "@/lib/actions/user.action";

import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

// import { UserButton } from "@clerk/nextjs";
// <UserButton afterSignOutUrl="/"/>

export default async function Home() {

  const user = await currentUser();
  if (!user) return null;

  // console.log("user : ",user);

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchPosts(1,30);
  // console.log("result : ",result);

  return (
    <div>
      <h1 className='head-text text-left'>Home</h1>

      <section className='mt-9 flex flex-col gap-10'>
        {result?.posts.length === 0 ? (
          <p className='no-result'>No threads found</p>
        ) : (
          <>
            {result?.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>

    </div>
  )
}