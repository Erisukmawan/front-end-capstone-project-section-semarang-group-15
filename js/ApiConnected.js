// Define link API from Railway Server
var baseURL = "https://languago.up.railway.app/api/v1/";

// Api Get Program
async function getProgram() {
    await fetch(baseURL + 'program', {
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

// API Get Testimoni
async function getTestimoni() {
    await fetch(baseURL + 'testimoni', {
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

kontakForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nama = document.querySelector("#NamaKontak").value;
    let email = document.querySelector("#EmailKontak").value;
    let pesan = document.querySelector("#PesanKontak").value;

    await fetch(baseURL + 'kontak-kami', {
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
        .then(data => 
            Toastify({
            text: "Berhasil Terkirim. Tunggu Admin kami menghubungi kamu yaa !",
            className: "Danger",
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast())
        .catch(error =>
        Toastify({
            text: `Error Gaes: ${error}.`,
            className: "danger",
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, rgb(255, 129, 119) 0%, rgb(255, 134, 122) 0%, rgb(255, 140, 127) 21%, rgb(249, 145, 133) 52%, rgb(207, 85, 108) 78%, rgb(177, 42, 91) 100%)",
            }
        }).showToast())

    document.querySelector("#NamaKontak").value = "";
    document.querySelector("#EmailKontak").value = "";
    document.querySelector("#PesanKontak").value = "";
});

// Post daftar Program
const daftarProgramForm = document.querySelector('#daftarProgramForm');
var modal = document.getElementById('modalDaftar');

daftarProgramForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    let nama = document.querySelector("#NamaModal").value;
    let email = document.querySelector("#emailModal").value;
    let telepon = document.querySelector("#TelModal").value;
    let program = document.querySelector("#programModal").value;
    let kelas = document.querySelector("#kelasModal").value;

    fetch(baseURL + 'daftar-program', {
        method: "POST",
        body: JSON.stringify({
            nama: nama,
            email: email,
            no_tel: telepon,
            nama_program: program,
            kelas: kelas,
        }),
        headers: {
            'Content-type': 'application/json',
        },
    }).then(response => response.json())
        .then( () => {
            // alert(`Berhasil Terkirim`);
            modal.style.display = "none";
            Toastify({
                text: "Daftar Berhasil. Tunggu Admin kami menghubungi kamu yaa !",
                className: "info",
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        })
        .catch(error => Toastify({
            text: `Error Gaes: ${error}.`,
            className: "danger",
            gravity: "bottom",
            position: "right",
            style: {
                background: "linear-gradient(to right, rgb(255, 129, 119) 0%, rgb(255, 134, 122) 0%, rgb(255, 140, 127) 21%, rgb(249, 145, 133) 52%, rgb(207, 85, 108) 78%, rgb(177, 42, 91) 100%)",
            }
        }).showToast())

    document.querySelector("#NamaModal").value = "";
    document.querySelector("#emailModal").value = "";
    document.querySelector("#TelModal").value = "";
    document.querySelector("#programModal").value = "";
    document.querySelector("#kelasModal").value = "";
});