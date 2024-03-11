import api from "./api";

/* POST */

export async function createNewList(listName) {
  try {
    const response = await api.post('/listas', { title: listName, date: new Date() })
    return response.data;
  } catch (err) { 
    throw new Error('Erro ao criar nova lista');
  }
}

/* DELETE */

export async function deleteList(listId) {
  try {
    await api.delete(`/listas/${listId}`);
    return "Lista deletada com sucesso";

  } catch (err) { 
    console.error('Erro ao deletar lista:', err);
    throw new Error('Erro ao deletar lista');
  }
}

/* UPDATE */

export async function updateList(listId, title) {
  try {
    await api.put(`listas/{listId}`, { title: newTitle });
    return "Lista atualizada com Sucesso";
  } catch (e) { 
    return "Error: " + e.message;
  }
}