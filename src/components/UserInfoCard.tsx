import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserInfoCard({ userId }: { userId: string }) {
	console.log(userId);
	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
			{/* Top */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Information</span>
				<Link href="/" className="text-blue-500 text-xs">
					See all
				</Link>
			</div>

			{/* Bottom */}
			<div className="flex flex-col gap-3 text-gray-600">
				<div className="flex items-center gap-2">
					<span className="text-lg font-medium">John Smith</span>
					<span className="text-sm">@jhonatan</span>
				</div>

				<p className="text-sm">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
					cumque, deserunt non vero quia dolore 😁
				</p>

				<div className="flex items-center gap-1">
					<Image src="/map.png" alt="img" width={16} height={16} />
					<span>
						Living in <b>USA</b>
					</span>
				</div>

				<div className="flex items-center gap-1">
					<Image src="/school.png" alt="img" width={16} height={16} />
					<span>
						Went to <b>Edgar High School</b>
					</span>
				</div>

				<div className="flex items-center gap-1">
					<Image src="/work.png" alt="img" width={16} height={16} />
					<span>
						Works at <b>Apple Inc.</b>
					</span>
				</div>

				<div className="flex items-center justify-between text-xs">
					<div className="flex gap-1 items-center">
						<Image src="/link.png" alt="img" width={16} height={16} />
						<Link
							target="blank"
							href="https://frontifyy.vercel.app/"
							className="text-blue-500 font-medium"
						>
							Frontify.com
						</Link>
					</div>

					<div className="flex gap-1 items-center">
						<Image src="/date.png" alt="img" width={16} height={16} />
						<span>Joined November 2024</span>
					</div>
				</div>

				<button className="bg-blue-500 hover:bg-blue-600 transition-all font-medium text-white text-sm rounded-md p-2">
					Follow
				</button>

				<button className="font-medium cursor-pointer text-xs self-end text-red-400">
					Block User
				</button>
			</div>
		</div>
	);
}
