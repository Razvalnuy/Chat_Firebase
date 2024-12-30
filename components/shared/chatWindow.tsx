import InputMessage from "@/components/shared/inputMessage"
import { Message } from "@/components/shared/message"
import { Card } from "@/components/ui/card"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { auth } from "../../firebase/firebase"

export default function ChatWindows() {
	const [isAuth, setIsAuth] = useState(false)
	const [loading, setLoading] = useState(true)
	const router = useRouter()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setIsAuth(true)
				console.log("Пользователь вошел:", currentUser.email)
			} else {
				setIsAuth(false)
				router.push("/register")
			}
			setLoading(false)
		})

		return () => unsubscribe()
	}, [router])

	if (loading) {
		return <div className="loader mx-auto "></div>
	}

	if (!isAuth) {
		return null
	}

	return (
		<Card className="h-[calc(100vh-92px)] flex flex-col p-4 m-4 shadow-xl">
			<div className="flex-1 overflow-y-auto">
				<Message user message="Привет" />
				<Message message="Оу привет" />
				<Message user message="Как дела бро" />
				<Message message="Сойдет" />
			</div>

			<div className="sticky bottom-0">
				<InputMessage />
			</div>
		</Card>
	)
}
