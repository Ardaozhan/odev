function mesajGonder() {
    var isim = document.getElementById("isim") ? document.getElementById("isim").value : "";
    var mesaj = document.getElementById("mesaj") ? document.getElementById("mesaj").value : "";

    if (isim == "") {
        alert("Lütfen isminizi girin be kardeşim!");
    } else if (mesaj == "") {
        alert("E hani mesaj? Bir şeyler yazsaydın keşke.");
    } else {
        alert("Sağolasın " + isim + ", mesajını aldık. En kısa zamanda dükkana bekleriz!");
    }
}