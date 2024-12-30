"use client"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { auth } from "@/firebase/firebase"
import { cn } from "@/lib/utils"
import { signInWithEmailAndPassword } from "firebase/auth"
import { Chrome, Github } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

interface Props {
	className?: string
}

export const AuthCardLogin: React.FC<Props> = ({ className }) => {
	const router = useRouter()
	const [authData, setAuthData] = useState({
		email: "",
		password: "",
	})

	const login = async () => {
		try {
			const { user } = await signInWithEmailAndPassword(
				auth,
				authData.email,
				authData.password
			)
			console.log("Успешно вошли email:", user.email)
			router.push("/chat")
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className={cn("flex justify-center items-center", className)}>
			<Tabs defaultValue="account" className="w-[400px] ">
				<TabsContent value="account">
					<Card>
						<CardHeader>
							<CardTitle className="text-2xl">Войти в аккаунт</CardTitle>
							<CardDescription>С помощью</CardDescription>
							<div className="flex justify-between gap-6">
								<Button className="w-[50%]" variant="outline">
									<Github />
									GitHub
								</Button>
								<Button className="w-[50%]" variant="outline">
									<Chrome />
									Google
								</Button>
							</div>
						</CardHeader>
						<div className="flex items-center">
							<hr className="flex-grow border-gray-300 mx-6" />
							<span className="text-gray-500 text-sm font-medium">Или</span>
							<hr className="flex-grow border-gray-300 mx-6" />
						</div>

						<CardContent className="space-y-2">
							<div className="space-y-1">
								<Label htmlFor="email">Почта</Label>
								<Input
									onChange={(e) =>
										setAuthData({ ...authData, email: e.target.value })
									}
									id="email"
									type="email"
									placeholder="Введите почту"
								/>
							</div>
							<div className="space-y-1">
								<Label htmlFor="Password">Пароль</Label>
								<Input
									onChange={(e) =>
										setAuthData({ ...authData, password: e.target.value })
									}
									id="Password"
									type="password"
									placeholder="Введите пароль"
								/>
							</div>
							<CardDescription
								className="flex justify-end text-primary cursor-pointer"
								onClick={() => router.push("/register")}
							>
								Зарегистрироваться
							</CardDescription>
						</CardContent>
						<CardFooter>
							<Button onClick={login} className="w-full">
								Войти
							</Button>
						</CardFooter>
					</Card>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default AuthCardLogin
