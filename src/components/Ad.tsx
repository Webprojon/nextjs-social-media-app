import Image from "next/image";
import React from "react";

export default function Ad({ size }: { size: "sm" | "md" | "lg" }) {
	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm">
			{/* Top */}
			<div className="flex items-center justify-between text-gray-500 font-medium">
				<span>Sponsored Ads</span>
				<Image src="/more.png" alt="img" width={16} height={16} />
			</div>

			{/* Bottom */}
			<div
				className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
			>
				<div
					className={`relative w-full
						${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}
				>
					<Image
						fill
						alt="img"
						className="rounded-lg object-cover"
						src="https://images.pexels.com/photos/17565564/pexels-photo-17565564/free-photo-of-lighthouse-among-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					/>
				</div>
				<div className="flex items-center gap-4">
					<Image
						alt="img"
						width={24}
						height={24}
						className="rounded-full w-6 h-6 object-cover"
						src="https://images.pexels.com/photos/17565564/pexels-photo-17565564/free-photo-of-lighthouse-among-palm-trees.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
					/>
					<span className="text-blue-500 font-medium">BigChef Lounge</span>
				</div>
				<p className={`${size === "sm" ? "text-xs" : "text-sm"}`}>
					{size === "sm"
						? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, laudantium."
						: size === "md"
						? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, distinctio consequuntur sint facere voluptatem explicabo!"
						: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, eveniet, repellendus cum accusamus, veniam rem maiores perferendis aut ad ab."}
				</p>
				<button className="bg-slate-200 text-gray-500 text-xs p-2 rounded-lg">
					Learn More
				</button>
			</div>
		</div>
	);
}
