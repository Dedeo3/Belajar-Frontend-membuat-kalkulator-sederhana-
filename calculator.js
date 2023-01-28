let tombol = document.querySelector('.tombol');
let input = document.querySelector('.input')
tombol.addEventListener("click", function (data) {
    let klik = data.target;
    let pas_klik = klik.innerText;

    // percabangan
    if (pas_klik == "AC") {
        input.value = "";
    }
    else if (pas_klik == "Del") {
        input.value = input.value.slice("0", -"1");
    }
    else if(pas_klik== "="){
        input.value= eval(input.value);
    }
    else if(pas_klik=="%"){
        input.value= eval(input.value/100);
        return(input.value);
    }
    else {
        // agar bisa klik berulang dan bebas
        input.value = input.value + pas_klik
    }
});