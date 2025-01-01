"use client"
import ChatWindows from "@/components/shared/chatWindow"

type Props = {
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
