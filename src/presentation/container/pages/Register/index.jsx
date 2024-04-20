// -- template
import Authentication from "presentation/component/templates/Authentication";

const Register = (props) => {
	const authenticationData = {
		title: "Bisa liburan ala Sultan, tapi dompet tetap aman!",
		description:
			"Buat akun untuk dapet harga lebih hemat, diskon ekstra, & asuransi gratis.",
		heroImage:
			"https://assets-bucket.tiket.com/member/v1.25.0/_next/static/media/ilustration-register.87ccf84a.png",
	};

	return (
		<Authentication {...authenticationData}>
			<h2>Buat Akun</h2>
			<form action="#">
				<input type="text" placeholder="Nomor Ponsel atau Email" />
				<button type="submit">Buat Akun</button>
			</form>
		</Authentication>
	);
};

export default Register;
