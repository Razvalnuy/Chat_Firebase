import { cn } from "@/lib/utils"
import React from "react"
import { Card } from "../ui/card"

interface Props {
	className?: string
	message: string
	user?: boolean
}

export const Message: React.FC<Props> = ({ className, message, user }) => {
	return (
		<div
			className={`flex ${user ? "justify-end" : "justify-start"} pb-2 relative`}
		>
			<div>
				<Card
					className={cn(
						`inline-block ${
							user ? "bg-blue-600" : "bg-primary"
						} text-white px-4 py-2 rounded-lg text-base max-w-xs break-words `,
						className
					)}
				>
					{message}
					<p
						className={`text-white text-[13px] flex ${
							user ? "justify-end" : "justify-start"
						} `}
					>
						21:22
					</p>
				</Card>
			</div>
		</div>
	)
}
