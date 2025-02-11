export function toRupiah(amount) {
    return "Rp " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); 
  }
  