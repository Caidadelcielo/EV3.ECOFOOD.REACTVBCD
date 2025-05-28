import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../services/firebase";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css"; // Asegúrate de tener Bootstrap instalado
import "@fortawesome/fontawesome-free/css/all.min.css"; // Asegúrate de tener FontAwesome instalado
//import "../styles/RecuperarContraseña.css"; // Asegúrate de tener este archivo CSS


export default function RecuperarContraseña() {
    const [email, setEmail] = useState("");

    const handleReset = async (e) => {
        e.preventDefault();
    try {
        await sendPasswordResetEmail(auth, email);
        Swal.fire("Correo enviado", "Revisa tu bandeja para restablecer la contraseña",
"success");
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
    Swal.fire("Error", "No se pudo enviar el correo. Revisa el email ingresado.", "error");
    console.error("Error al enviar correo de recuperación:", error);
    }
};
return (
<div className="container mt-5">
    <h2>Recuperar Contraseña</h2>
    <form onSubmit={handleReset}>
        <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="btn btn-primary">Enviar correo de
recuperación</button>
        </form>
    </div>
    );
}