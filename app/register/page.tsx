import AuthCardRegister from "@/components/shared/authCardRegister"
import React from "react"

interface Props {
	className?: string
}

 const Register: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<AuthCardRegister />
		</div>
	)
}


export default Register