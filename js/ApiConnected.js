// Api Get Testimoni
function getTestimoni() {
    fetch('https://languago.up.railway.app/api/v1/testimoni')
        .then(response => response.json()).then(result => { renderTestimoni(result.data) })
        .catch(error => console.log('Error Fatching Data :', error));
}
function renderTestimoni(data) {
    let testiContainer = document.getElementById("testimoniContainer");
    for (var i = 0; i < data.length; i++) {
        testiContainer.innerHTML += `<div class="testimoni-card" >
                    <div class="testimoni-img">
                        <img src="images/${(data[i].foto)}" alt="Person 1">
                    </div>
                    <div class="testimoni-author">
                        <p>${(data[i].nama)}</p>
                    </div>
                    <div class="testimoni-program">
                        <p>${(data[i].nama_program)}</p>
                    </div>
                    <div class="testimoni-text">
                        <p>“${(data[i].pesan_testimoni)}”</p>
                    </div>
                </div>`;
    }
}
getTestimoni();