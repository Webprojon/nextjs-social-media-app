import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftMenu/LeftMenu";
import RigthMenu from "@/components/rightMenu/RigthMenu";
import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProfilePage({
	params,
}: {
	params: { username: string };
}): Promise<string> {
	const { username } = params;

	const user = await prisma.user.findFirst({
		where: {
			username,
		},
		include: {
			_count: {
				select: {
					followers: true,
					followings: true,
					posts: true,
				},
			},
		},
	});

	if (!user) return notFound();

	const { userId: currentUserId } = await auth();

	let isBlocked;

	if (currentUserId) {
		const res = await prisma.block.findFirst({
			where: {
				blockerId: user.id,
				blockedId: currentUserId,
			},
		});

		if (res) isBlocked = true;
	} else {
		isBlocked = false;
	}

	if (isBlocked) return notFound();

	return (
		<div className="flex gap-6 pt-6">
			{/* Left */}
			<div className="hidden xl:block w-[20%]">
				<LeftMenu type="profile" />
			</div>

			{/* Center */}
			<div className="w-full lg:w-[70%] xl:w-[50%]">
				<div className="flex flex-col gap-6">
					<div className="flex flex-col items-center justify-center text-gray-800">
						<div className="w-full h-64 relative">
							<Image
								alt="img"
								fill
								className="rounded-md object-cover"
								src={user.cover || "/noCover.png"}
							/>
							<Image
								alt=""
								width={128}
								height={128}
								src={user.avatar || "/noAvatar.png"}
								className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
							/>
						</div>
						<h1 className="mt-20 mb-4 text-2xl font-medium">
							{user.name && user.surname
								? user.name + " " + user.surname
								: user.username}
						</h1>
						<div className="flex items-center justify-center gap-12 mb-4">
							<div className="flex flex-col items-center">
								<span className="font-medium">{user._count.posts}</span>
								<span className="text-sm">Posts</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">{user._count.followers}</span>
								<span className="text-sm">Followers</span>
							</div>
							<div className="flex flex-col items-center">
								<span className="font-medium">{user._count.followings}</span>
								<span className="text-sm">Following</span>
							</div>
						</div>
					</div>

					<Feed />
				</div>
			</div>

			{/* Right */}
			<div className="hidden xl:block w-[30%]">
				<RigthMenu user={user} />
			</div>
		</div>
	);
}
