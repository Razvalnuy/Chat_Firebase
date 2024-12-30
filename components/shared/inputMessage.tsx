"use client"

import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"

export default function InputMessage() {
	const [message, setMessage] = useState("")

	return (
		<div className="flex gap-2">
			<div className="grid w-full items-center gap-1.5">
				<Input
					value={message}
					onChange={(event) => setMessage(event.target.value)}
					type="text"
					id="text"
					placeholder="Введите ваше сообщение…"
				/>
			</div>
			<Button disabled={Boolean(!message.trim())}>
				<Send />
			</Button>
		</div>
	)
}
