function chkControl(j){
    var total = 0;

    for(var i = 0; i < document.frmMapel.pilihMapel.length; i++){
        if(document.frmMapel.pilihMapel[i].checked){
            total = total + 1;
        }
        if(total > 2){
            alert("Hanya pilih dua mata pelajaran");
            document.frmMapel.pilihMapel[j].checked = false;
            return false;
        }
    }
}

function cariJurusan(){
    if(document.getElementById("cbFisika").checked && document.getElementById("cbKimia").checked){
        window.location.href = "jurusan_fis_kim.html";
    }
    else if(document.getElementById("cbFisika").checked && document.getElementById("cbBiologi").checked){
        window.location.href = "jurusan_fis_bio.html";
    }
    else if(document.getElementById("cbKimia").checked && document.getElementById("cbBiologi").checked){
        window.location.href = "jurusan_kim_bio.html";
    }
    else{
        alert("Pilih dua mata pelajaran");
    }
}