import CardProducto from '../components/CardProducto';
import CerrarSesion from "../components/cerrarsesion";
import { getUserData } from "../services/userService";
import { useAuth } from "../context/AuthContext";
useEffect(() => {
const fetch = async () => {
const datos = await getUserData(user.uid);
setUserData(datos);
};
if (user) fetch();
}, [user]);
function Home() {
    // Aquí puedes agregar lógica para obtener productos desde una API o base de datos
    // Por ahora, solo mostraremos un producto de ejemplo
    const productos = [
        { id: 1, nombre: 'Pan Integral', precio: '$500' },
        // Puedes agregar más productos aquí
    ];  
return (
<div>
<h2>Bienvenido a EcoFood</h2>
<CerrarSesion />
</div>
);
}

 return (
 <div className="container mt-4">
 <h1>Productos Disponibles</h1>
 <CardProducto nombre="Pan Integral" precio="$500" />
 </div>
 );
}
export default Home;