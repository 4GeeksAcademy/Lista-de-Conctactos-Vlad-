const urlBase = "https://playground.4geeks.com/contact/agendas/AgendaVlad/"

export const getAgendas = async (dispatch) => {
    try {
        const response = await fetch(`${urlBase}contacts`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();

        dispatch({
            type: "GetAgendas",
            payload: data.contacts,
        });

        return data;

    } catch (error) {
        console.error("Error al cargar las agendas:", error.message);
    }
};

export const createUser = async (slug) => {
    const response = await fetch(`${urlBase}contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        console.log("No se ha conseguido crear el usuario");
        throw new Error("No se pudo crear el usuario"); 
    }

    const data = await response.json();
    console.log("Usuario creado:", data); 
    return data; 
};


export const updateUser = async (userId, userData) => {
    const response = await fetch(`${urlBase}contacts/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        console.log("No se pudo editar el usuario");
        throw new Error("No se pudo editar el usuario");
    }

    const data = await response.json();
    console.log("Usuario editado:", data);
    return data;
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${urlBase}contacts/${userId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        console.log("No se pudo borrar el usuario");
        throw new Error("No se pudo borrar el usuario");
    }

    const data = await response.json();
    console.log("Usuario borrado:", data);
    return data;
};
