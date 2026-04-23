function mesajGonder() {
    var isimAlani = document.getElementById("isim");
    var mesajAlani = document.getElementById("mesaj");
    var isim = isimAlani ? isimAlani.value.trim() : "";
    var mesaj = mesajAlani ? mesajAlani.value.trim() : "";

    if (isim === "") {
        alert("Lütfen isminizi yazın.");
        return;
    }

    if (mesaj === "") {
        alert("Lütfen mesajınızı girin.");
        return;
    }

    alert("Teşekkürler " + isim + ". Mesajınız Atolye Kahve ekibine ulaştı.");

    if (isimAlani && mesajAlani) {
        isimAlani.value = "";
        mesajAlani.value = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var revealItems = document.querySelectorAll("[data-reveal]");

    revealItems.forEach(function (item) {
        var delay = item.getAttribute("data-delay");

        if (delay) {
            item.style.setProperty("--reveal-delay", delay + "ms");
        }
    });

    if (!("IntersectionObserver" in window)) {
        revealItems.forEach(function (item) {
            item.classList.add("is-visible");
        });

        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18
    });

    revealItems.forEach(function (item) {
        observer.observe(item);
    });
});
