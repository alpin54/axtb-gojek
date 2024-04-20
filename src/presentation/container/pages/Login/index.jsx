// - templates
import Authentication from "presentation/component/templates/Authentication";

const Login = (props) => {
	const authenticationData = {
		title: "Log in untuk nikmati semua keuntungannya!",
		description: "Kamu cukup masukkan nomor ponsel atau email aja, kok.",
		heroImage:
			"https://assets-bucket.tiket.com/member/v1.25.0/_next/static/media/tman-login.7d8c6e31.png",
	};

	return (
		<Authentication {...authenticationData}>
			<h2>Login</h2>
			<form action="#">
				<input type="text" placeholder="Nomor Ponsel atau Email" />
				<button type="submit">Login</button>
			</form>
		</Authentication>
	);
};

export default Login;
