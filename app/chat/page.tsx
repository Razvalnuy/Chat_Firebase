"use client"
import ChatWindows from "@/components/shared/chatWindow"

interface Props {
	className?: string
}

const Chat = ({ className }: Props) => {
	return (
		<div className={className}>
			<ChatWindows />
		</div>
	)
}

export default Chat
