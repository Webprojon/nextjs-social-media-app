import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "../Ad";

export default function LeftMenu({ type }: { type: string }) {
	return (
		<div className="flex flex-col gap-6">
			{type === "home" && <ProfileCard />}

			{/* Left Menu */}
			<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col text-gray-500 gap-1">
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/posts.png" alt="img" width={20} height={20} />
					<span>My Posts</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/activity.png" alt="img" width={20} height={20} />
					<span>Activity</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/market.png" alt="img" width={20} height={20} />
					<span>Marketplace</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/events.png" alt="img" width={20} height={20} />
					<span>Events</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/albums.png" alt="img" width={20} height={20} />
					<span>Albums</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/videos.png" alt="img" width={20} height={20} />
					<span>Videos</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/news.png" alt="img" width={20} height={20} />
					<span>News</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/courses.png" alt="img" width={20} height={20} />
					<span>Courses</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/lists.png" alt="img" width={20} height={20} />
					<span>Lists</span>
				</Link>
				<hr className="border-t-1 border-gray-50 self-center" />
				<Link
					href="/"
					className="flex items-center gap-3 p-2 rounded-md hover:bg-slate-100"
				>
					<Image src="/settings.png" alt="img" width={20} height={20} />
					<span>Settings</span>
				</Link>
			</div>

			<Ad size="sm" />
		</div>
	);
}
