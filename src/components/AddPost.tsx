import Image from "next/image";
import React from "react";

export default function AddPost() {
	return (
		<div className="p-4 bg-white rounded-lg flex gap-4 justify-between text-sm">
			{/* Avatar */}
			<Image
				src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
				alt="img"
				width={48}
				height={48}
				className="w-12 h-12 rounded-full object-cover"
			/>

			{/* Posts */}
			<div className="flex-1 ">
				{/* Input */}
				<div className="flex gap-4">
					<textarea
						placeholder="What's on your mind?"
						className="flex-1 bg-slate-100 rounded-lg p-2"
					></textarea>
					<Image
						src="/emoji.png"
						alt="img"
						width={20}
						height={20}
						className="w-5 h-5 self-end"
					/>
				</div>

				{/* Post Options */}
				<div className="flex flex-wrap items-center gap-5 mt-4 text-gray-400">
					<div className="flex items-center gap-2 cursor-pointer">
						<Image src="/addimage.png" alt="img" width={20} height={20} />
						Photo
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<Image src="/addVideo.png" alt="img" width={20} height={20} />
						Video
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<Image src="/poll.png" alt="img" width={20} height={20} />
						Poll
					</div>
					<div className="flex items-center gap-2 cursor-pointer">
						<Image src="/addevent.png" alt="img" width={20} height={20} />
						Event
					</div>
				</div>
			</div>
		</div>
	);
}
