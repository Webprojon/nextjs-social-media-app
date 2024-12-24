import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendRequests() {
	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
			{/* Top */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">Friend Requests</span>
				<Link href="/" className="text-blue-500 text-xs">
					See all
				</Link>
			</div>

			{/* Users */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="img"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-semibold">Wayne Burton</span>
				</div>

				<div className="flex items-center gap-3">
					<Image
						src="/accept.png"
						alt="img"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/reject.png"
						alt="img"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="img"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-semibold">Tom Smith</span>
				</div>

				<div className="flex items-center gap-3">
					<Image
						src="/accept.png"
						alt="img"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/reject.png"
						alt="img"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Image
						src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt="img"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full object-cover"
					/>
					<span className="font-semibold">Anna Marek</span>
				</div>

				<div className="flex items-center gap-3">
					<Image
						src="/accept.png"
						alt="img"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
					<Image
						src="/reject.png"
						alt="img"
						width={20}
						height={20}
						className="cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
}
