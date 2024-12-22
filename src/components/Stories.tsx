import Image from "next/image";
import React from "react";

export default function Stories() {
	return (
		<div className="p-4 bg-white rounded-lg text-xs overflow-scroll scrollbar-hidden shadow-md select-none">
			<div className="flex gap-8 w-max">
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
				{/* Story */}
				<div className="flex flex-col items-center gap-2 cursor-pointer">
					<Image
						src="https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=600"
						alt=""
						width={64}
						height={64}
						className="w-16 h-16 rounded-full ring-2 object-cover"
					/>
					<span className="font-medium">Ricky</span>
				</div>
			</div>
		</div>
	);
}
