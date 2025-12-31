const toastEl = document.getElementById('meuToast');
const toast = new bootstrap.Toast(toastEl, {
    delay: 5000 // 5 segundos
});

toast.show();