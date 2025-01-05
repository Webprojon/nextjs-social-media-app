import Image from "next/image";
import React, { Suspense } from "react";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import PostInfo from "./PostInfo";
import { auth } from "@clerk/nextjs/server";

type FeedPostType = PostType & { user: User } & {
	likes: [{ userId: string }];
} & {
	_count: { comments: number };
};

export default async function Post({ post }: { post: FeedPostType }) {
	const { userId } = await auth();
	return (
		<div className="flex flex-col gap-4">
			{/* User */}
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<Image
						alt="img"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full"
						src={post.user.avatar || "noAvatar.png"}
					/>
					<span className="font-medium">
						{post.user.name && post.user.surname
							? post.user.name + " " + post.user.surname
							: post.user.username}
					</span>
				</div>
				{userId === post.user.id && <PostInfo postId={post.id} />}
			</div>

			{/* Description */}
			<div className="flex flex-col gap-4">
				{post.img && (
					<div className="w-full min-h-96 relative">
						<Image
							fill
							alt="img"
							src={post.img}
							className="object-cover rounded-md"
						/>
					</div>
				)}
				<p>{post.desc}</p>
			</div>

			{/* Interaction */}
			<Suspense fallback="Loading...">
				<PostInteraction
					postId={post.id}
					likes={post.likes.map((like) => like.userId)}
					commentNumber={post._count.comments}
				/>
			</Suspense>

			<Suspense fallback="Loading...">
				<Comments postId={post.id} />
			</Suspense>
		</div>
	);
}
