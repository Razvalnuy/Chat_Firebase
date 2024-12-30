import { cn } from "@/lib/utils"
import React, { PropsWithChildren } from "react"

interface Props {
	className?: string
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<div className={cn("mx-auto max-w-[1000px]", className)}>
			{children}
		</div>
	)
}
