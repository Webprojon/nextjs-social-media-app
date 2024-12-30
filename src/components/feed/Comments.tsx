import Image from "next/image";
import React from "react";

export default function Comments() {
	return (
		<div>
			{/* Write Comments */}
			<div className="flex items-center gap-4">
				<Image
					alt="img"
					width={32}
					height={32}
					className="w-8 h-8 rounded-full"
					src="https://images.pexels.com/photos/14797234/pexels-photo-14797234.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
				/>
				<div className="flex-1 flex items-center justify-between bg-slate-100 rounded-lg text-sm px-6 py-2 w-full">
					<input
						type="text"
						placeholder="write a comment..."
						className="bg-transparent outline-none flex-1 text-gray-500 placeholder:text-gray-500"
					/>
					<Image
						alt="img"
						width={16}
						height={16}
						src="/emoji.png"
						className="cursor-pointer"
					/>
				</div>
			</div>

			{/* See Comments */}
			<div>
				<div className="flex justify-between gap-4 mt-6">
					<Image
						alt="img"
						width={40}
						height={40}
						className="w-10 h-10 rounded-full"
						src="https://images.pexels.com/photos/157606/girl-black-dress-portrait-hair-157606.jpeg?auto=compress&cs=tinysrgb&w=600"
					/>

					<div className="flex flex-col gap-2 flex-1">
						<span className="font-medium">Bernard Rich</span>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
							necessitatibus reprehenderit, nam repudiandae dolorem laborum
							sunt, facere odio ab, cupiditate corporis esse magni culpa! Quidem
							beatae veritatis facere voluptatibus repellat.
						</p>

						<div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
							<div className="flex items-center gap-3">
								<Image
									src="/like.png"
									alt="img"
									width={12}
									height={12}
									className="cursor-pointer w-4 h-4"
								/>
								<span className="text-gray-300">|</span>
								<span className="text-gray-500">123 Likes</span>
							</div>

							<div>Reply</div>
						</div>
					</div>

					<Image
						src="/more.png"
						alt="img"
						width={16}
						height={16}
						className="cursor-pointer w-4 h-4"
					/>
				</div>
			</div>
		</div>
	);
}
