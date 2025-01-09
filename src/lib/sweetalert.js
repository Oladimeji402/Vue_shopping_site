import Swal from "sweetalert2";

export default function Fire(title, message, icon,) {
    Swal.fire({
        title: title,
        text: message,
        icon: icon,
        toast: true,
        position: "top-end",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        showCancelButton: false,
        showCloseButton: false,
        showDenyButton: false,
    })
}