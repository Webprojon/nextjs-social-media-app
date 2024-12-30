import React, { Suspense } from "react";
import { User } from "@prisma/client";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "../Ad";

export default function RigthMenu({ user }: { user?: User }) {
	return (
		<div className="flex flex-col gap-6">
			{user && (
				<>
					<Suspense fallback="Loading...">
						<UserInfoCard user={user} />
					</Suspense>

					<Suspense fallback="Loading...">
						<UserMediaCard user={user} />
					</Suspense>
				</>
			)}

			<FriendRequests />
			<Birthdays />
			<Ad size="md" />
		</div>
	);
}
