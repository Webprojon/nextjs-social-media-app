import Image from "next/image";
import React from "react";
import Comments from "./Comments";

export default function Post() {
	return (
		<div className="flex flex-col gap-4">
			{/* User */}
			<div className="flex justify-between items-center">
				<div className="flex items-center gap-4">
					<Image
						alt="img"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full"
						src="https://images.pexels.com/photos/27372390/pexels-photo-27372390/free-photo-of-a-photo-of-a-mountain-with-the-sun-shining.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					/>
					<span className="font-medium">Jack Bridge</span>
				</div>
				<Image src="/more.png" alt="img" width={16} height={16} />
			</div>

			{/* Description */}
			<div className="flex flex-col gap-4">
				<div className="w-full min-h-96 relative">
					<Image
						fill
						alt="img"
						src="https://images.pexels.com/photos/6072423/pexels-photo-6072423.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
						className="object-cover rounded-md"
					/>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
					quod, praesentium consequatur consectetur modi ea dolorem,
					consequuntur aliquam est iusto molestiae ad, ullam amet! Maiores
					corporis consequatur assumenda iusto eos.
				</p>
			</div>

			{/* Interaction */}
			<div className="flex items-center justify-between text-sm my-4">
				<div className="flex gap-8">
					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							alt="img"
							width={16}
							height={16}
							src="/like.png"
							className="cursor-pointer"
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							123 <span className="hidden md:inline">Likes</span>
						</span>
					</div>

					<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
						<Image
							alt="img"
							width={16}
							height={16}
							src="/comment.png"
							className="cursor-pointer"
						/>
						<span className="text-gray-300">|</span>
						<span className="text-gray-500">
							123 <span className="hidden md:inline">Comments</span>
						</span>
					</div>
				</div>

				<div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
					<Image
						alt="img"
						width={16}
						height={16}
						src="/share.png"
						className="cursor-pointer"
					/>
					<span className="text-gray-300">|</span>
					<span className="text-gray-500">
						123 <span className="hidden md:inline">Shares</span>
					</span>
				</div>
			</div>

			<Comments />
		</div>
	);
}
