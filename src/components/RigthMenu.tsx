import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

export default function RigthMenu({ userId }: { userId?: string }) {
	return (
		<div className="flex flex-col gap-6">
			{userId && (
				<>
					<UserInfoCard userId={userId} />
					<UserMediaCard userId={userId} />
				</>
			)}

			<FriendRequests />
			<Birthdays />
			<Ad size="md" />
		</div>
	);
}
