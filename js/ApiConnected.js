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

// Post daftar Program
const daftarProgramForm = document.querySelector('#daftarProgramForm');

daftarProgramForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let nama = document.querySelector("#Nama").value;
    let email = document.querySelector("#email").value;
    let telepon = document.querySelector("#Tel").value;
    let programModal = document.querySelector("#programModal").value;
    let kelas = document.querySelector("#kelas").value;

    console.log(nama,email,telepon,programModal,kelas)
    const url = "https://languago.up.railway.app/api/v1/daftar-program"
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            nama: nama,
            email: email,
            no_tel: telepon,
            nama_program: programModal,
            kelas: kelas,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }).then(response => console.log(response))
        .then(data => alert("Berhasil Terkirim"))
        .catch(error => alert(error))

    document.querySelector("#Nama").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#Tel").value = "";
    document.querySelector("#programModal").value = "";
    document.querySelector("#kelas").value = "";
});

// Api Get Program
async function getProgram() {
    await fetch('https://languago.up.railway.app/api/v1/program', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
        })
        .then(response => response.json()).then(data => {  
            let programContainer = document.getElementById("programContainer");
            for (var value of data) {
                programContainer.innerHTML += `<div class="program-item">
                <div class="card-title">
                    <h1>${(value.nama_program)}</h1>
                </div>
                <div class="price-program">
                    <p>Mulai Dari</p>
                    <h2><b>Rp.${(value.harga_program)}/bln</b></h2>
                    <h5>(Program Minimal 3 Bulan)</h5>
                </div>
                <div class="benefit-program">
                    <h3><b>Benefit</b></h3>
                    <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Sertifikat  </p>
                    <hr>
                    <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Akses Modul Selamanya </p>
                    <hr>
                    <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> 3x Pertemuan seminggu </p>
                    <hr>
                    <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Waktu Fleksibel </p>
                    <hr>
                    <p><i class="fa fa-check-circle-o" aria-hidden="true"></i> Quiz perhari </p>
                    <hr>
                </div>
                <div class="button-program">
                    <button  onclick="btnDaftar()" id="buttonDaftar" class="button-daftar"><b>Daftar Sekarang</b></button>
                </div>
            </div>`;
            }
        })
        .catch(error => console.log('Error Fatching Data :', error));
}
getProgram();

