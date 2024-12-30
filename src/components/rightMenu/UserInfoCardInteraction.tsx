"use client";

import { switchFollow } from "@/lib/actions";
import React, { useState } from "react";

export default function UserInfoCardInteraction({
	userId,
	isUserBlocked,
	isFollowing,
	isFollowingSent,
}: {
	userId: string;
	isUserBlocked: boolean;
	isFollowing: boolean;
	isFollowingSent: boolean;
}) {
	const [userState, setUserState] = useState({
		following: isFollowing,
		blocked: isUserBlocked,
		followingRequestSent: isFollowingSent,
	});

	const follow = async () => {
		try {
			// Pass a valid payload object
			await switchFollow(userId);
			setUserState((prev) => ({
				...prev,
				following: prev.following ? false : true,
				followingRequestSent: !prev.following && !prev.followingRequestSent,
			}));
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<form action={follow}>
				<button className="w-full bg-blue-500 hover:bg-blue-600 transition-all font-medium text-white text-sm rounded-md p-2">
					{userState.following
						? "Following"
						: userState.followingRequestSent
						? "Friend Request Sent"
						: "Follow"}
				</button>
			</form>

			<form action="" className="self-end">
				<button className="font-medium cursor-pointer text-xs text-red-400">
					{userState.blocked ? "Unblock User" : "Block User"}
				</button>
			</form>
		</>
	);
}
