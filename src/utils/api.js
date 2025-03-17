const [vinyls, setVinyls] = useState([]);

useEffect(() => {
  fetch("http://127.0.0.1:8000/api/vinyls?page=1")  // Asegúrate de que la API es accesible
    .then((res) => res.json())
    .then((data) => setVinyls(data.member)) // El array de vinilos está en "member"
    .catch((error) => console.error("Error al cargar los vinilos:", error));
}, []);
