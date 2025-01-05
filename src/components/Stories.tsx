import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/db";
import StoryList from "./StoryList";

const Stories = async () => {
	const { userId: currentUserId } = await auth();

	if (!currentUserId) return null;

	const stories = await prisma.story.findMany({
		where: {
			expiresAt: {
				gt: new Date(),
			},
			OR: [
				{
					user: {
						followers: {
							some: {
								followerId: currentUserId,
							},
						},
					},
				},
				{
					userId: currentUserId,
				},
			],
		},
		include: {
			user: true,
		},
	});
	return (
		<div className="p-4 bg-white rounded-lg shadow-md overflow-scroll text-xs scrollbar-hidden">
			<div className="flex gap-8 w-max">
				<StoryList stories={stories} userId={currentUserId} />
			</div>
		</div>
	);
};

export default Stories;
