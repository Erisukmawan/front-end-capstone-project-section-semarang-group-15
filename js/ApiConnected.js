// Api Get Testimoni
function getTestimoni() {
    fetch('https://languago.up.railway.app/api/v1/testimoni', {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
        })
        .then(response => response.json()).then(data => {  
            let testiContainer = document.getElementById("testimoniContainer");
            for (var value of data) {
                testiContainer.innerHTML += `<div class="testimoni-card" >
                    <div class="testimoni-img">
                        <img src="images/${(value.foto)}" alt="Person 1">
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