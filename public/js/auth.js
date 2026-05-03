function getToken() {
  return localStorage.getItem('token');
}

function getCliente() {
  const cliente = localStorage.getItem('cliente');
  return cliente ? JSON.parse(cliente) : null;
}

function isLoggedIn() {
  return !!getToken() && !!getCliente();
}

function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('cliente');
  window.location.href = '/';
}

function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = '/login';
  }
}