import prisma from "@/lib/db";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function UserMediaCard({ user }: { user: User }) {
	const postsWithMedia = await prisma.post.findMany({
		where: {
			userId: user.id,
			img: {
				not: null,
			},
		},
		take: 8,
		orderBy: {
			createdAt: "desc",
		},
	});

	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
			{/* Top */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Media</span>
				<Link href="/" className="text-blue-500 text-xs">
					See all
				</Link>
			</div>

			{/* Bottom */}
			<div className="flex gap-3 justify-between flex-wrap">
				{postsWithMedia.length ? (
					postsWithMedia.map((post) => (
						<div key={post.id} className="relative w-1/5 h-24">
							<Image
								fill
								alt="img"
								src={post.img!}
								className="rounded-md object-cover"
							/>
						</div>
					))
				) : (
					<p className="text-gray-500">No media found!</p>
				)}
			</div>
		</div>
	);
}
