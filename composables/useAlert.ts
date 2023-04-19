import Swal, { SweetAlertOptions } from "sweetalert2"

export default function() {

  interface SwalOptions {
    title?: string,
    icon?: string
  }

  const simpleSwal = (option: SwalOptions) => {
    const {
      title = "sure?",
      icon = "warning"
    } = option || {}

    Swal.fire({
      title,
      icon
    } as SweetAlertOptions)
  }

  return {
    simpleSwal
  }
}