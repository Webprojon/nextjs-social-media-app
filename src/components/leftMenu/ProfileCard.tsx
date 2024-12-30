import prisma from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

export default async function ProfileCard() {
	const { userId } = await auth();

	if (!userId) {
		throw new Error("Invalid userId");
	}

	const user = await prisma.user.findFirst({
		where: {
			id: userId,
		},
		include: {
			_count: {
				select: {
					followers: true,
				},
			},
		},
	});

	if (!user) return null;

	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-6">
			<div className="h-20 relative">
				<Image
					alt="img"
					fill
					className="rounded-md object-cover"
					src={user.cover || "/noCover.png"}
				/>
				<Image
					alt="img"
					width={48}
					height={48}
					src={user.avatar || "/noAvatar.png"}
					className="rounded-full w-12 h-12 object-cover absolute left-0 right-0 m-auto -bottom-6 ring-1 ring-white z-10"
				/>
			</div>

			<div className="h-20 flex flex-col items-center gap-2">
				<span className="font-semibold">
					{user.name && user.surname
						? user.name + " " + user.surname
						: user.username}
				</span>
				<div className="flex items-center gap-4">
					<div className="flex">
						<Image
							alt="img"
							width={12}
							height={12}
							className="rounded-full w-3 h-3 object-cover"
							src="https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-festive-christmas-decorations-with-ornaments.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						/>
						<Image
							alt="img"
							width={12}
							height={12}
							className="rounded-full w-3 h-3 object-cover"
							src="https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-festive-christmas-decorations-with-ornaments.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						/>
						<Image
							alt="img"
							width={12}
							height={12}
							className="rounded-full w-3 h-3 object-cover"
							src="https://images.pexels.com/photos/29725302/pexels-photo-29725302/free-photo-of-festive-christmas-decorations-with-ornaments.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						/>
					</div>

					<span className="text-xs text-gray-500">
						{user._count.followers} Followers
					</span>
				</div>

				<button className="bg-blue-500 text-white text-xs p-2 rounded-md font-medium">
					My Profile
				</button>
			</div>
		</div>
	);
}
