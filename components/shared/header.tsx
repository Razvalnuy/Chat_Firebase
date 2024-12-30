"use client"
import { cn } from "@/lib/utils"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { auth } from "../../firebase/firebase"
import { Button } from "../ui/button"
import { Container } from "./container"

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
	const [user, setUser] = useState(null)
	const router = useRouter()

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser)
		})

		return () => unsubscribe()
	}, [])

	const logout = async () => {
		try {
			await signOut(auth)
			console.log("Вы успешно вышли из аккаунта!")
			router.push("/")
		} catch (err) {
			console.error("Ошибка при выходе из аккаунта:", err)
		}
	}

	const login = () => {
		console.log("log page)")
		router.push("/")
	}

	return (
		<div className="bg-[#2b221d] ">
			<Container>
				<div
					className={cn(
						"h-[60px] flex justify-between items-center",
						className
					)}
				>
					<h1 className="text-xl font-extrabold text-white">Razvalnuy Chat</h1>
					<div className="flex items-center gap-4">
						<h1 className="text-xl font-extrabold text-white">
							{user && user.email}
						</h1>
						{user && (
							<Button onClick={user ? logout : login}>
								{user ? "Выйти" : "Войти"}
							</Button>
						)}
					</div>
				</div>
			</Container>
		</div>
	)
}
