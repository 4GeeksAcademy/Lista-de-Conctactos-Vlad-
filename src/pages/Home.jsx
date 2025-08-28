import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getAgendas } from "../services/GetAgendas.js";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()

	const { listaAgendas } = store

	useEffect(() => {
		getAgendas(dispatch)
	}, [dispatch]);

	console.log(listaAgendas)

	return (
		<div className="container mt-5">
			<div className="text-center">
				<h1 className="display-1">Lista de Contactos Vlad</h1>
			</div>
			<div className="d-grid gap-2 d-md-flex justify-content-md-end mb-2">
				<button className="btn btn-success me-md-2" type="button">Agregar Contacto</button>
			</div>

			{store.listaAgendas.map((contact, index) => (
			<div key={contact.id} className="card mb-3"> 
				<div className="row g-0"> 
					<div className="col-4"> 
						<img src={rigoImageUrl} className="img-fluid rounded-start" alt="..." /> 
					</div>
					<div className="col-8"> 
						<div className="card-body">
							<h3 className="card-title">{contact.name}</h3>
							<p className="card-text text-body-secondary">{contact.phone}</p>
							<p className="card-text text-body-secondary">{contact.email}</p>
							<p className="card-text text-body-secondary">{contact.address}</p>
						</div>
					</div>
				</div>
			</div>
			))};
		</div> 
	);
}; 