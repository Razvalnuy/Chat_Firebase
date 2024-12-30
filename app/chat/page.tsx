"use client"
import ChatWindows from "@/components/shared/chatWindow"
import React from "react"

interface Props {
	className?: string
}

const Chat: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<ChatWindows />
		</div>
	)
}

export default Chat
