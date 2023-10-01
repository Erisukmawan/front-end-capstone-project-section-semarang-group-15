// Api Get Testimoni
async function getTestimoni() {
    await fetch('https://languago.up.railway.app/api/v1/testimoni', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
        })
        .then(response => response.json()).then(data => {  
            let testiContainer = document.getElementById("testimoniContainer");
            for (var value of data) {
                testiContainer.innerHTML += `<div class="testimoni-card" >
                    <div class="testimoni-img">
                        <img src="images/${(value.foto)}" alt="Person ${(value.id)}">
                    </div>
                    <div class="testimoni-author">
                        <p>${(value.nama)}</p>
                    </div>
                    <div class="testimoni-program">
                        <p>${(value.nama_program)}</p>
                    </div>
                    <div class="testimoni-text">
                        <p>“${(value.pesan_testimoni)}”</p>
                    </div>
                </div>`;
            }
        })
        .catch(error => console.log('Error Fatching Data :', error));
}
function renderTestimoni(data) {
    console.log(data)
}
getTestimoni();

// Post Kontak Kami
const kontakForm = document.querySelector('#kontak_kami');

kontakForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let nama = document.querySelector("#NamaKontak").value;
    let email = document.querySelector("#EmailKontak").value;
    let pesan = document.querySelector("#PesanKontak").value;

    const url = "https://languago.up.railway.app/api/v1/kontak-kami"
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            nama: nama,
            email: email,
            isi_pesan: pesan
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }).then(response => response.json())
        .then(data => alert("Berhasil Terkirim"))
        .catch(error => alert(error))

    document.querySelector("#NamaKontak").value = "";
    document.querySelector("#EmailKontak").value = "";
    document.querySelector("#PesanKontak").value = "";
});