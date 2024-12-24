import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Birthdays() {
	return (
		<div className="p-4 bg-white shadow-md rounded-lg text-sm flex flex-col gap-4">
			<div className="flex items-center justify-between font-medium">
				<span className="text-gray-500">Birthdays</span>
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
					<button className="bg-blue-500 text-white text-xs px-2 py-1 rounded-md">
						Celebrate
					</button>
				</div>
			</div>

			{/* Upcoming Birthday */}
			<div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
				<Image alt="img" width={24} height={24} src="/gift.png" />
				<Link href="/" className="flex flex-col gap-1 text-xs">
					<span className="text-gray-700 font-semibold">
						Upcoming Birthdays
					</span>
					<span className="text-gray-500">
						See other 16 have upcoming birthdays
					</span>
				</Link>
			</div>
		</div>
	);
}
