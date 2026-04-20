function mesajGonder() {
    var isim = document.getElementById("isim") ? document.getElementById("isim").value : "";
    var mesaj = document.getElementById("mesaj") ? document.getElementById("mesaj").value : "";

    if (isim == "") {
        alert("Lütfen isminizi girin, tanışalım!");
    } else if (mesaj == "") {
        alert("Mesajınızı yazmayı unuttunuz.");
    } else {
        alert("Merhaba " + isim + ", mesajınız Atölye'ye ulaştı. En kısa sürede döneceğiz!");
    }
}