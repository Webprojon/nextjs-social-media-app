import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import UserInfoCardInteraction from "./UserInfoCardInteraction";
import UpdateUser from "./UpdateUser";

export default async function UserInfoCard({ user }: { user: User }) {
	const createdAtDate = new Date(user.createdAt);

	const formattedDate = createdAtDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	let isUserBlocked = false;
	let isFollowing = false;
	let isFollowingSent = false;

	const { userId: currentUserId } = await auth();

	if (currentUserId) {
		const blockRes = await prisma.block.findFirst({
			where: {
				blockerId: currentUserId,
				blockedId: user.id,
			},
		});
		if (blockRes) {
			isUserBlocked = true;
		} else {
			isUserBlocked = false;
		}
		//blockRes ? (isUserBlocked = true) : (isUserBlocked = false);

		const followRes = await prisma.follower.findFirst({
			where: {
				followerId: currentUserId,
				followingId: user.id,
			},
		});
		if (followRes) {
			isFollowing = true;
		} else {
			isFollowing = false;
		}
		//followRes ? (isFollowing = true) : (isFollowing = false);

		const followReqRes = await prisma.followRequest.findFirst({
			where: {
				senderId: currentUserId,
				receiverId: user.id,
			},
		});
		if (followReqRes) {
			isFollowingSent = true;
		} else {
			isFollowingSent = false;
		}
		//followReqRes ? (isFollowingSent = true) : (isFollowingSent = false);
	}
	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
			{/* Top */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Information</span>
				{currentUserId === user.id ? (
					<UpdateUser user={user} />
				) : (
					<Link href="/" className="text-blue-500 text-xs">
						See all
					</Link>
				)}
			</div>

			{/* Bottom */}
			<div className="flex flex-col gap-3 text-gray-600">
				<div className="flex items-center gap-2">
					<span className="text-lg font-medium">
						{user.name && user.surname
							? user.name + " " + user.surname
							: user.username}
					</span>
					<span className="text-sm">@{user.username}</span>
				</div>

				{user.description && <p className="text-sm">{user.description}</p>}

				{user.city && (
					<div className="flex items-center gap-1">
						<Image src="/map.png" alt="img" width={16} height={16} />
						<span>
							Living in <b>{user.city}</b>
						</span>
					</div>
				)}

				{user.school && (
					<div className="flex items-center gap-1">
						<Image src="/school.png" alt="img" width={16} height={16} />
						<span>
							Went to <b>{user.school}</b>
						</span>
					</div>
				)}

				{user.work && (
					<div className="flex items-center gap-1">
						<Image src="/work.png" alt="img" width={16} height={16} />
						<span>
							Works at <b>{user.work}</b>
						</span>
					</div>
				)}

				<div className="flex items-center justify-between text-xs">
					{user.website && (
						<div className="flex gap-1 items-center">
							<Image src="/link.png" alt="img" width={16} height={16} />
							<Link
								target="blank"
								href={user.website}
								className="text-blue-500 font-medium"
							>
								{user.website}
							</Link>
						</div>
					)}

					<div className="flex gap-1 items-center">
						<Image src="/date.png" alt="img" width={16} height={16} />
						<span>Joined {formattedDate}</span>
					</div>
				</div>

				{currentUserId && currentUserId !== user.id && (
					<UserInfoCardInteraction
						userId={user.id}
						isUserBlocked={isUserBlocked}
						isFollowing={isFollowing}
						isFollowingSent={isFollowingSent}
					/>
				)}
			</div>
		</div>
	);
}
