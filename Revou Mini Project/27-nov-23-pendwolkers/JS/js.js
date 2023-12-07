function LuasSegitiga () {
    var a = document.getElementById("alas").value
    var t = document.getElementById("tinggi").value
    if(a == 0 || t == 0) {
        window.alert("Nilai alas atau tinggi tidak valid!")
        return;
    }
    var hasil = 0.5 * a * t;
    document.getElementById("hasil").innerHTML = "Hasil: Luas segitiga adalah " + hasil + "cm" ;
}
function LuasSegitiga1 () {
    var sisia = document.getElementById("sisia").value
    var sisib = document.getElementById("sisib").value
    var sisic = document.getElementById("sisic").value

    {
        window.alert("Nilai alas atau tinggi tidak valid!")
        return;
    }
    var hasil = sisia + sisib + sisic;
    document.getElementById("hasil").innerHTML = "Hasil: Keliling segitiga adalah " + hasil + "cm" ;
}

function ResetForm(){
    document.getElementById("input-form").reset();
    document.getElementById("hasil").innerHTML = "Hasil:";
}