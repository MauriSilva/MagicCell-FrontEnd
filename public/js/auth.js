function getToken() {
  return localStorage.getItem('token');
}

function getCliente() {
  const cliente = localStorage.getItem('cliente');
  return cliente ? JSON.parse(cliente) : null;
}

function isAdmin() {
  const cliente = getCliente();
  return cliente?.role === "admin";
}

function isLoggedIn() {
  return !!getToken() && !!getCliente();
}

function logout(mensagem = null) {

    localStorage.removeItem("token");
    localStorage.removeItem("cliente");

    if (mensagem) {
        alert(mensagem);
    }

    window.location.href = "/login";
}

function verificarSessao(response) {

    if (response.status === 401 || response.status === 403) {

        logout(
            "Sua sessão expirou. Faça login novamente."
        );

        return false;
    }

    return true;
}


function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = '/login';
  }
}
