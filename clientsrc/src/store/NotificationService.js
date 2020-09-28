import Swal from "sweetalert2";
export default class NotificationService {
  static async confirmAction(
    title = "Are you sure",
    text = "Whats done can't be Undone!"
  ) {
    try {
      let res = await Swal.fire({
        title: title,
        text: text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "aquamarine",
        cancelButtonColor: "dodgerblue",
        confirmButtonText: "Do it",
      });
      if (res.value) {
        return true;
      }
      return false;
    } catch (error) {}
  }
  static toast(title = "Default Toast", timer = 5000, icon = "info") {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: icon,
      timer: timer,
      toast: true,
      position: "top-right",
      showConfirmButton: false,
      timerProgressBar: true,
    });
  }
}
