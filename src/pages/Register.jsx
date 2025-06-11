import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../services/firebase";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { saveUserData } from "../services/userService";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [comuna, setComuna] = useState("");
    const [telefono, setTelefono] = useState("");
    const tipo = "cliente"; // fijo
    const navigate = useNavigate();

    const esPasswordRobusta = (pwd) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(pwd);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!esPasswordRobusta(password)) {
            Swal.fire(
                "Contraseña débil",
                "Debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y símbolos.",
                "warning"
            );
            return;
        }

        if (!direccion || !comuna) {
            Swal.fire("Campos requeridos", "Debes ingresar tu dirección y comuna.", "warning");
            return;
        }

        try {
            const credenciales = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(credenciales.user);

            await saveUserData(credenciales.user.uid, {
                nombre,
                email,
                direccion,
                comuna,
                telefono,
                tipo,
            });

            Swal.fire(
                "¡Registro exitoso!",
                "Revisa tu correo para verificar tu cuenta antes de iniciar sesión.",
                "success"
            );

            navigate("/login");
        } catch (error) {
            Swal.fire("Error", "No se pudo registrar", "error");
            console.error("Error al registrar usuario:", error);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <input
                type="text"
                placeholder="Nombre completo"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Dirección"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Comuna"
                value={comuna}
                onChange={(e) => setComuna(e.target.value)}
                required
            />
            <input
                type="tel"
                placeholder="Teléfono (opcional)"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />

            {/* Tipo de usuario oculto */}
            <input type="hidden" value={tipo} />

            <button type="submit">Registrarse</button>
        </form>
    );
}
