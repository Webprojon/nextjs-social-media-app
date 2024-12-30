import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserMediaCard({ user }: { user: User }) {
	console.log(user);
	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
			{/* Top */}
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">User Media</span>
				<Link href="/" className="text-blue-500 text-xs">
					See all
				</Link>
			</div>

			{/* Bottom */}
			<div className="flex gap-3 justify-between flex-wrap">
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/5370666/pexels-photo-5370666.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/29643350/pexels-photo-29643350/free-photo-of-elegant-christmas-decor-on-grand-piano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/29548508/pexels-photo-29548508/free-photo-of-cozy-window-nook-with-city-view-and-greenery.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/29617303/pexels-photo-29617303/free-photo-of-urban-cityscape-with-ferris-wheel-and-traffic.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/5370666/pexels-photo-5370666.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/27671463/pexels-photo-27671463/free-photo-of-the-view-from-a-cliff-overlooking-the-town-of-croatia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/5370666/pexels-photo-5370666.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
				<div className="relative w-1/5 h-24">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/17565564/pexels-photo-17565564/free-photo-of-lighthouse-among-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="rounded-md object-cover"
					/>
				</div>
			</div>
		</div>
	);
}
