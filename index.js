let ilkeded = Number(prompt("Hava Dərəcəsin Qeyd Edin."))
if (ilkeded > 25) {
    document.write("Hava istidir")
} else if (ilkeded >= 15 && ilkeded <= 25) {
    document.write("Hava normaldır")
} else {
    document.write("Hava soyuqdur")
}
