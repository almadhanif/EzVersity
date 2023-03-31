/* Data */
const TITLE_QUIZ = [
    "Fisika",
    "Kimia",
    "Biologi"
]

const DB_QUIZ_QUESTION = [
    [
        '<center><img src="assets/fisika/soal_1.jpg" alt=""></center><br>Sebuah balok bermassa 5 kg (berat w = 50 N) digantung dengan tali dan diikatkan pada atap. Jika balok diam maka berapakah tegangan talinya?',
        '<center><img src="assets/fisika/soal_2.jpg" alt=""></center><br>Sebuah benda bermassa 40 kg ditarik melalui katrol sehingga memiliki posisi seperti yang diperlihatkan pada gambar (a) di bawah ini. Jika sistem itu diam, maka berapakah gaya F?',
        '<center><img src="assets/fisika/soal_3.jpg" alt=""></center><br>Benda bermassa 10 kg diikat tali dan dibentuk sistem seperti pada gambar (a) berikut ini. Jika sistem itu diam dan percepatan gravitasi g = 10 m/s<sup>2</sup> maka tentukan tegangan tali T1 dan T2!',
        '<center><img src="assets/fisika/soal_4.jpg" alt=""></center><br>Balok bermassa 20 kg berada di atas bidang miring licin dengan sudut kemiringan 30o. Jika Ucok ingin mendorong ke atas sehingga kecepatannya tetap maka berapakah gaya yang harus diberikan oleh Ucok?',
        '<center><img src="assets/fisika/soal_5.jpg" alt=""></center><br>Dhania menarik beban dengan bantuan katrol seperti pada gambar (a) di bawah ini. Pada saat gaya yang diberikan F = 125 N ternyata beban dapat terangkat dengan kecepatan tetap. g = 10 m/s<sup>2</sup>. Jika gaya gesek katrol dan massa tali dapat diabaikan maka berapakah massa beban tersebut?',
        'Sebuah truk dapat menghasilkan gaya sebesar 7000 N. Jika truk tersebut dapat bergerak dengan percepatan 3,5 m/s<sup>2</sup>, maka tentukan massa truk tersebut!',
        '<center><img src="assets/fisika/soal_7.jpg" alt=""></center><br>Balok A bermassa 4 kg diletakkan di atas balok B yang bermassa 6 kg. Kemudian balok B ditarik dengan gaya F di atas lantai mendatar licin sehingga gabungan balok itu mengalami percepatan 1,8 m/s<sup>2</sup>. Jika tiba-tiba balok A terjatuh maka berapakah percepatan yang dialami oleh balok B saja?',
        '<center><img src="assets/fisika/soal_8.jpg" alt=""></center><br>Sebuah benda bermassa 2 kg bergerak dengan kecepatan awal 5 m/s di atas bidang datar licin, kemudian benda tersebut diberi gaya tetap searah dengan gerak benda. Setelah menempuh jarak 4 m, kecepatan benda menjadi 7 m/s. Tentukan besar gaya tersebut!',
        'Jika suatu benda diberi gaya 20 N, benda tersebut memiliki percepatan 4 m/s<sup>2</sup>. Berapakah percepatan yang dialami benda tersebut jika diberi gaya 25 N?',
        'Sebuah gaya F dikerjakan pada sebuah benda bermassa m, menghasilkan percepatan 10 m/s<sup>2</sup>. Jika gaya tersebut dikerjakan pada benda kedua dengan massa m2, percepatan yang dihasilkan adalah 15 m/s<sup>2</sup>. <br><br>Tentukan:<br><br>a. Perbandingan m1 dan m2.<br><br>b. Percepatan yang dihasilkan gaya F1, apabila m1 dan m2 digabung.',
    ],
    [
        "Perhatikan konfigurasi elektron di bawah ini!<br><br>Y : [Ne]3s<sup>2</sup>3p<sup>5</sup> <br><br> Dari konfigurasi elektron di atas, dapat disimpulkan bahwa unsur Y berada pada....",
        "Perhatikan konfigurasi elektron berikut!<br><br>P : 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup><br><br>Q : 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup><br><br>Jika P dan Q membentuk senyawa PQ<sub>4</sub>, bentuk molekulnya adalah....",
        'Perhatikan data uji pH dua buah air limbah berikut!<br><br><center><img src="assets/kimia/soal_3.webp" alt="" width="90%"></center><br>Dari hasil pengujian maka pH air limbah 1 dan limbah 2 berturut – turut adalah....',
        'Perhatikan grafik berikut!<br><br><center><img src="assets/kimia/soal_4.webp" alt=""></center><br>Untuk melakukan titrasi seperti gambar di atas, digunakan indikator....',
        'Sebanyak 100ml CaCl<sub>2</sub> 0.6M dicampur dengan 100ml Na<sub>2</sub>CO<sub>3</sub> 0.6M. jika Ksp CaCO3 = 2.8 x 10 <sup>-9</sup>, massa zat yang mengendap adalah.... (Ar. Ca = 40, C = 12, O = 16, Na = 23, Cl = 35.5)',
    ],
    [
        "Perhatikan ciri-ciri makhluk hidup berikut ini !<br><br>1. Eukariot<br>2. Heterotrof<br>3. Pencernaan ekstraseluler<br>4. Pencernaan ekstraseluler<br>5. Dinding sel tersusun atas kitin<br><br>Peranan organisme yang memiliki ciri di atas dalam ekosistem adalah.....",
        "Perhatikan gambar di bawah ini!<br><br><center><img src='assets/Biology/soal_2.png' alt=''></center><br>Kesimpulan yang tepat untuk gamar piramida energi diatas adalah....",
        'Pencemaran lingkungan dapat ditimbulkan oleh berbagai bahan pencemar, salah satunya adalah penumpukan kotoran dari peternakan. Cara mengatasi bahan pencemar itu sehingga menjadi bermanfaat bagi manusia adalah....',
    ]
];

const DB_QUIZ_ANSWER = [
    [
        ['25 N', '50 N', '10 N', '100 N'],
        ['450 N', '150 N', "600 N", '300 N'],
        ['50√3 N dan 50 N', '25√3 N dan 25 N', '25√3 N dan 50 N', '50√3 N dan 25 N'],
        ['10 N', '50 N', '100 N', '200 N'],
        ['12,5 kg', '25 kg', '6,25 kg', '20 kg'],
        ['1000 kg', '2000 kg', '3000 kg', '4000 kg'],
        ['2 m/s<sup>2</sup>', '4 m/s<sup>2</sup>', '6 m/s<sup>2</sup>', '3 m/s<sup>2</sup>'],
        ['9 N', '12 N', '3 N', '6 N'],
        ['5 m/s<sup>2</sup>', '6 m/s<sup>2</sup>', '4 m/s<sup>2</sup>', '3 m/s<sup>2</sup>'],
        ['3 : 4 dan 3 m/s<sup>2</sup>', '3 : 2 dan 6 m/s<sup>2</sup>', '3 : 2 dan 5 m/s<sup>2</sup>', '2 : 3 dan 6 m/s<sup>2</sup>'],
    ],
    [
        ['periode 3, golongan VIIB', 'periode 3, golongan VIIA', 'periode 3, golongan VA', 'periode 3, golongan VA'],
        ['bengkok', 'segitiga piramida', "tetrahedron", 'bentuk T'],
        ['4,2 ≤ pH ≤ 6,0 dan 7,6 ≤ pH ≤ 10', '4,2 ≤ pH ≤ 8,3 dan pH ≥ 10', '4,2 ≤ pH ≤ 8,3 dan pH ≤ 10', 'pH ≤ 8,3 dan pH ≥ 10'],
        ['metil orange', 'metil merah', 'bromtimol biru', 'phenolphtalein'],
        ['9 gram', '60 gram', '6 gram', '100 gram'],
    ],
    [
        ['detritivor', 'konsumen', 'produsen', 'dekomposer'],
        ['Pada dasar piramid, jumlah individu dan jumlah energi yang terlibat adalah paling besar', 'Ketika puncak piramid dicapai, jumlah individu meningkat, dan jumlah energi sama', "Pada dasar piramid, jumlah individu dan jumlah energi yang terlibat adalah paling rendah", 'Pada semua tingkat, jumlah individu dan jumlah energi yang terlibat adalah sama'],
        ['menampung dan memprosesnya menjadi biogas', 'mengolahnya menjadi makanan ternak', 'memanfaatkannya untuk industri kertas', 'memanfaatkannya untuk industri kertas'],
    ]
]

/* const DB_QUIZ = {
    '0':[
        {
            'question': '<center><img src="assets/fisika/soal_1.jpg" alt=""></center><br>Sebuah balok bermassa 5 kg (berat w = 50 N) digantung dengan tali dan diikatkan pada atap. Jika balok diam maka berapakah tegangan talinya?',
            'answer': ['25 N', '50 N', '10 N', '100 N'],
        },
        {
            'question': '<center><img src="assets/fisika/soal_2.jpg" alt=""></center><br>Sebuah benda bermassa 40 kg ditarik melalui katrol sehingga memiliki posisi seperti yang diperlihatkan pada gambar (a) di bawah ini. Jika sistem itu diam, maka berapakah gaya F?',
            'answer': ['450 N', '150 N', "600 N", '300 N'],
        },
        {
            'question': '<center><img src="assets/fisika/soal_3.jpg" alt=""></center><br>Benda bermassa 10 kg diikat tali dan dibentuk sistem seperti pada gambar (a) berikut ini. Jika sistem itu diam dan percepatan gravitasi g = 10 m/s<sup>2</sup> maka tentukan tegangan tali T1 dan T2!',
            'answer': ['50√3 N dan 50 N', '25√3 N dan 25 N', '25√3 N dan 50 N', '50√3 N dan 25 N']
        },
        {
            'question': '<center><img src="assets/fisika/soal_4.jpg" alt=""></center><br>Balok bermassa 20 kg berada di atas bidang miring licin dengan sudut kemiringan 30o. Jika Ucok ingin mendorong ke atas sehingga kecepatannya tetap maka berapakah gaya yang harus diberikan oleh Ucok?',
            'answer': ['10 N', '50 N', '100 N', '200 N']
        },
        {
            'question': '<center><img src="assets/fisika/soal_5.jpg" alt=""></center><br>Dhania menarik beban dengan bantuan katrol seperti pada gambar (a) di bawah ini. Pada saat gaya yang diberikan F = 125 N ternyata beban dapat terangkat dengan kecepatan tetap. g = 10 m/s<sup>2</sup>. Jika gaya gesek katrol dan massa tali dapat diabaikan maka berapakah massa beban tersebut?',
            'answer': ['12,5 kg', '25 kg', '6,25 kg', '20 kg']
        },
        {
            'question': 'Sebuah truk dapat menghasilkan gaya sebesar 7000 N. Jika truk tersebut dapat bergerak dengan percepatan 3,5 m/s<sup>2</sup>, maka tentukan massa truk tersebut!',
            'answer': ['1000 kg', '2000 kg', '3000 kg', '4000 kg']
        },
        {
            'question': '<center><img src="assets/fisika/soal_7.jpg" alt=""></center><br>Balok A bermassa 4 kg diletakkan di atas balok B yang bermassa 6 kg. Kemudian balok B ditarik dengan gaya F di atas lantai mendatar licin sehingga gabungan balok itu mengalami percepatan 1,8 m/s<sup>2</sup>. Jika tiba-tiba balok A terjatuh maka berapakah percepatan yang dialami oleh balok B saja?',
            'answer': ['2 m/s<sup>2</sup>', '4 m/s<sup>2</sup>', '6 m/s<sup>2</sup>', '3 m/s<sup>2</sup>']
        },
        {
            'question': '<center><img src="assets/fisika/soal_8.jpg" alt=""></center><br>Sebuah benda bermassa 2 kg bergerak dengan kecepatan awal 5 m/s di atas bidang datar licin, kemudian benda tersebut diberi gaya tetap searah dengan gerak benda. Setelah menempuh jarak 4 m, kecepatan benda menjadi 7 m/s. Tentukan besar gaya tersebut!',
            'answer': ['9 N', '12 N', '3 N', '6 N']
        },
        {
            'question': 'Jika suatu benda diberi gaya 20 N, benda tersebut memiliki percepatan 4 m/s<sup>2</sup>. Berapakah percepatan yang dialami benda tersebut jika diberi gaya 25 N?',
            'answer': ['5 m/s<sup>2</sup>', '6 m/s<sup>2</sup>', '4 m/s<sup>2</sup>', '3 m/s<sup>2</sup>']
        },
        {
            'question': 'Sebuah gaya F dikerjakan pada sebuah benda bermassa m, menghasilkan percepatan 10 m/s<sup>2</sup>. Jika gaya tersebut dikerjakan pada benda kedua dengan massa m2, percepatan yang dihasilkan adalah 15 m/s<sup>2</sup>. <br><br>Tentukan:<br><br>a. Perbandingan m1 dan m2.<br><br>b. Percepatan yang dihasilkan gaya F1, apabila m1 dan m2 digabung.',
            'answer': ['3 : 4 dan 3 m/s<sup>2</sup>', '3 : 2 dan 6 m/s<sup>2</sup>', '3 : 2 dan 5 m/s<sup>2</sup>', '2 : 3 dan 6 m/s<sup>2</sup>']
        }
    ],
    '1':[
        {
            'question': "Perhatikan konfigurasi elektron di bawah ini!<br><br>Y : [Ne]3s<sup>2</sup>3p<sup>5</sup> <br><br> Dari konfigurasi elektron di atas, dapat disimpulkan bahwa unsur Y berada pada....",
            'answer': ['periode 3, golongan VIIB', 'periode 3, golongan VIIA', 'periode 3, golongan VA', 'periode 3, golongan VA'],
        },
        {
            'question': "Perhatikan konfigurasi elektron berikut!<br><br>P : 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup><br><br>Q : 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup><br><br>Jika P dan Q membentuk senyawa PQ<sub>4</sub>, bentuk molekulnya adalah....",
            'answer': ['bengkok', 'segitiga piramida', "tetrahedron", 'bentuk T'],
        },
        {
            'question': 'Perhatikan data uji pH dua buah air limbah berikut!<br><br><center><img src="assets/kimia/soal_3.webp" alt="" width="90%"></center><br>Dari hasil pengujian maka pH air limbah 1 dan limbah 2 berturut – turut adalah....',
            'answer': ['4,2 ≤ pH ≤ 6,0 dan 7,6 ≤ pH ≤ 10', '4,2 ≤ pH ≤ 8,3 dan pH ≥ 10', '4,2 ≤ pH ≤ 8,3 dan pH ≤ 10', 'pH ≤ 8,3 dan pH ≥ 10']
        },
        {
            'question': 'Perhatikan grafik berikut!<br><br><center><img src="assets/kimia/soal_4.webp" alt=""></center><br>Untuk melakukan titrasi seperti gambar di atas, digunakan indikator....',
            'answer': ['metil orange', 'metil merah', 'bromtimol biru', 'phenolphtalein']
        },
        {
            'question': 'Sebanyak 100ml CaCl<sub>2</sub> 0.6M dicampur dengan 100ml Na<sub>2</sub>CO<sub>3</sub> 0.6M. jika Ksp CaCO3 = 2.8 x 10 <sup>-9</sup>, massa zat yang mengendap adalah.... (Ar. Ca = 40, C = 12, O = 16, Na = 23, Cl = 35.5)',
            'answer': ['9 gram', '60 gram', '6 gram', '100 gram']
        }
    ],
    '2':[
        {
            'question': "Perhatikan ciri-ciri makhluk hidup berikut ini !<br><br>1. Eukariot<br>2. Heterotrof<br>3. Pencernaan ekstraseluler<br>4. Pencernaan ekstraseluler<br>5. Dinding sel tersusun atas kitin<br><br>Peranan organisme yang memiliki ciri di atas dalam ekosistem adalah.....",
            'answer': ['detritivor', 'konsumen', 'produsen', 'dekomposer'],
        },
        {
            'question': "Perhatikan gambar di bawah ini!<br><br><center><img src='assets/Biology/soal_2.png' alt=''></center><br>Kesimpulan yang tepat untuk gamar piramida energi diatas adalah....",
            'answer': ['Pada dasar piramid, jumlah individu dan jumlah energi yang terlibat adalah paling besar', 'Ketika puncak piramid dicapai, jumlah individu meningkat, dan jumlah energi sama', "Pada dasar piramid, jumlah individu dan jumlah energi yang terlibat adalah paling rendah", 'Pada semua tingkat, jumlah individu dan jumlah energi yang terlibat adalah sama'],
        },
        {
            'question': 'Pencemaran lingkungan dapat ditimbulkan oleh berbagai bahan pencemar, salah satunya adalah penumpukan kotoran dari peternakan. Cara mengatasi bahan pencemar itu sehingga menjadi bermanfaat bagi manusia adalah....',
            'answer': ['menampung dan memprosesnya menjadi biogas', 'mengolahnya menjadi makanan ternak', 'memanfaatkannya untuk industri kertas', 'memanfaatkannya untuk industri kertas']
        }
    ]
}  */
const JURUSAN = [
    //fisika
    ['teknik kimia','teknik fisika','farmasi','fisika medis','fisiologi', 'bioteknologi'],
    //kimia
    ['biokimia','kehutanan','peternakan','teknik kimia','teknik fisika','farmasi'],
    //biologi
    ['fisika medis','fisiologi','biokimia','kehutanan','peternakan', 'bioteknologi'],
];

const CORRECT_ANSWER = {
                            //fisika
                            0:[1,3,0,2,0,
                                1,3,3,0, 1],
                            //kimia
                            1:[1,2,0,3,2],
                            //biologi
                            2:[3,0,0],
                        };
let nomor_soal = 0;
var saved_answer = new Array();
let total_score = 0;
var isClear;
var startTime;
var idx_quiz = 0;
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = now - startTime;
    var minutes = Math.floor(distance/60000);
    var seconds = Math.floor((distance%60000)/(1000));
    try{
        document.getElementById("jam").innerHTML = minutes + ":" + seconds;
    }catch{}
    if(isClear){
        clearInterval(x);
    }
}, 1000);

function pilihanQuiz(id){
    localStorage.setItem("id_quiz", id);
    location.href = 'enter_name.html';
}

function loadPilihanQuiz(){
    idx_quiz = window.localStorage.getItem("id_quiz");
    if(idx_quiz ==null){
        idx_quiz = 0;
    }
}

function firstOpen(){
        var initialAnswer = [];
        localStorage.setItem("no", "0");
        localStorage.setItem("saved_answer", []);
        isClear= false;
        loadPilihanQuiz();
        var length = DB_QUIZ_QUESTION[idx_quiz].length;
        for(i = 0; i < length; i++){
            initialAnswer.push(-1);
        }
        localStorage.setItem("saved_answer", JSON.stringify(initialAnswer));
        localStorage.setItem("isHaveLS", true);
        startTime = new Date().getTime();
        localStorage.setItem("startTime",startTime);
}

function getQuizTitle(){
    title =  TITLE_QUIZ[idx_quiz];
    if(title == null){
        title = 'FISIKA';
    }
    document.getElementById("quiz_title").innerHTML = title;
}

function firstSetup(){
    resetState();
    loadPilihanQuiz();
    getQuizTitle();
    var isNull = true;
    
    var x = [];
    try{
        x = JSON.parse(localStorage.getItem("saved_answer"));
    } catch{}
    var length = x.length;
    for(i = 0; i < length; i++){
        isNull = isNull && x[i]!=null;
    }
    isNull = isNull && (length !=0) && (length == DB_QUIZ_QUESTION[idx_quiz].length) && (JSON.parse(localStorage.getItem("isHaveLS"))!=null);  
    if(!isNull){
        localStorage.setItem("no", "0");
        localStorage.setItem("saved_answer", JSON.stringify([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]));
    }
    nomor_soal=JSON.parse(localStorage.getItem("no"));
    if(nomor_soal == null){
        nomor_soal = 0;
    }
    startTime = localStorage.getItem("startTime");
    if(startTime == null){
        startTime = new Date().getTime();
    }
    document.getElementById("nomor").innerHTML = "No. "+(nomor_soal+1);
    if(nomor_soal > DB_QUIZ_QUESTION[idx_quiz].length - 2){
        document.getElementById("nextbtn").innerText = "Submit";
    } else {
        document.getElementById("nextbtn").innerText = "Next";
    }

    document.getElementById('Pertanyaan').innerHTML = DB_QUIZ_QUESTION[idx_quiz][nomor_soal];
    document.getElementById('textPilihan0').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][0];
    document.getElementById('textPilihan1').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][1];
    document.getElementById('textPilihan2').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][2];
    document.getElementById('textPilihan3').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][3];
    
    var array = new Array();
    try{
        array = JSON.parse(localStorage.getItem("saved_answer"));
        if(array == null){
            array = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
            
        }
    }
    catch{}
    saved_answer = array;
    console.log(array);
    if(array[nomor_soal]!=null && array[nomor_soal] != -1){
        console.log("mamam");
        getAnswer();
    }
    updateProgressBar();
}

function setupQuestion(){
    document.getElementById("nomor").innerHTML = "No. "+(nomor_soal+1);
    if(nomor_soal > DB_QUIZ_QUESTION[idx_quiz].length - 2){
        document.getElementById("nextbtn").innerText = "Submit";
    } else {
        document.getElementById("nextbtn").innerText = "Next";
    }

    document.getElementById('Pertanyaan').innerHTML = DB_QUIZ_QUESTION[idx_quiz][nomor_soal];
    document.getElementById('textPilihan0').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][0];
    document.getElementById('textPilihan1').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][1];
    document.getElementById('textPilihan2').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][2];
    document.getElementById('textPilihan3').innerHTML = DB_QUIZ_ANSWER[idx_quiz][nomor_soal][3];
    
    array = [];
    try{
        array = JSON.parse(localStorage.getItem("saved_answer"));
        if(array == null){
            array= saved_answer;
        }
    }
    catch{}
    resetState();
    if(array[nomor_soal]!=null && array[nomor_soal] != -1){
        console.log("mamam");
        getAnswer();
    }
    updateProgressBar();
}

function updateProgressBar(){
    var jml = 0;
    var length = DB_QUIZ_QUESTION[idx_quiz].length;
    try{
        var array = JSON.parse(localStorage.getItem("saved_answer"));
    } catch{}
    if(array == null){
        array = saved_answer;
    }
    for(i = 0; i < length; i++){
        if(array[i]!=-1 && array[i] != null){
            jml++;
        }
    }
    console.log(jml*100/length);
    document.getElementById("pbv").style.width = jml*100/length +"%";
    document.getElementById("progress_precent").innerText = (jml*100/length).toFixed(0) +"% dijawab";
}

function showPopup(){
    document.getElementById("soalcont").style.display = "block";
    document.getElementById("black_background").style.display = "block";
    getListSoal();
}

function hidePopup(){
    document.getElementById("soalcont").style.display = "none";
    document.getElementById("black_background").style.display = "none";
}

function gotoSoal(no){
    nomor_soal = no;
    document.getElementById("nomor").innerHTML = "No. "+(nomor_soal+1);
    localStorage.setItem("no", nomor_soal);
    hidePopup();
    array = [];
    try{
        array = localStorage.getItem("saved_answer");
    }
    catch{}
    if(array == null){
        array = saved_answer;
    }
    if(array[nomor_soal]!=null && array[nomor_soal] == -1){
        resetState();
    }
    setupQuestion();
}

function getListSoal(){
    var listSoal = document.getElementById('soalcont2');
    var array = [];
    try{
        array = JSON.parse(localStorage.getItem("saved_answer"));
        if(array == null){
            array = saved_answer;
        }
    }
    catch{}
    listSoal.innerHTML =''; 

    array.forEach(function (value, i){
       console.log(value == null);
        if(value == "-1" || value == null){
            listSoal.innerHTML += 
                '<div id="belum_dijawab" onclick="gotoSoal('+
                (i)+')">'+(i+1)+
                '</div>'
        } else {
            listSoal.innerHTML += 
                '<div id="sudah_dijawab" onclick="gotoSoal('+
                (i)+')">'+(i+1)+
                '</div>'
        }
    })
        
}

function nextQuestion(){
    if(nomor_soal > DB_QUIZ_QUESTION[idx_quiz].length - 2){
        stopQuiz()
    } else{
        array = [];
        try{
            array = JSON.parse(localStorage.getItem("saved_answer"));       
            if(array == null){
                array = saved_answer;
            }
        }
        catch{}
        if(array[nomor_soal]!=null && array[nomor_soal] != -1){
            console.log("OK2");
            nomor_soal++;
            document.getElementById("nomor").innerHTML = "No. "+(nomor_soal+1);
            localStorage.setItem("no", nomor_soal);
            setupQuestion();
            if(array[nomor_soal]!=null && array[nomor_soal] == -1){
                resetState();
            }
        }
        else{
            console.log("OK");
            nomor_soal++;
            document.getElementById("nomor").innerHTML = "No. "+(nomor_soal+1);
            localStorage.setItem("no", nomor_soal);
            resetState()
            setupQuestion()
        }
    }
}

function getAnswer(){
    var x = JSON.parse(localStorage.getItem("saved_answer"));
    if(x == null){
        x = saved_answer;
    }
    document.getElementById("pilihan" + x[nomor_soal]).checked = true;
}

function backQuestion(){
    if(nomor_soal!=0){
        nomor_soal--;
        document.getElementById("nomor").innerHTML = "No. "+(nomor_soal+1);
        localStorage.setItem("no", nomor_soal);
        setupQuestion();
    }
}

function resetState(){
    try{
        document.querySelector('input[name="pilihan"]:checked').checked = false;
    }
    catch{}
} 
function stopQuiz(){
    checkAnswer();
    localStorage.setItem('score', total_score);
    localStorage.setItem('title', TITLE_QUIZ[idx_quiz]);
    localStorage.setItem('jurusan', JSON.stringify(JURUSAN[idx_quiz]));
    localStorage.setItem("saved_answer", []);
    window.location.href="score_page.html";
    isClear = true;
    
    return
}
function saveAnswer(){
    const answer = document.querySelector('input[name="pilihan"]:checked');
    if(answer != null){
        array = [];
        try{
            array = JSON.parse(localStorage.getItem("saved_answer"));
            if(array == null){
                array = saved_answer;
            }
        }
        catch{}
        
        array[nomor_soal] = parseInt(answer.getAttribute('data-id'));
        saved_answer[nomor_soal] = parseInt(answer.getAttribute('data-id'));
        console.log(saved_answer);
        localStorage.setItem("saved_answer", JSON.stringify(array)); 
        updateProgressBar();
    } 
}
function checkAnswer(){
    var array = [];
    try{
        array = JSON.parse(localStorage.getItem("saved_answer"));
        if(array == null){
            array = saved_answer;
        }
    }
    catch{}

    for(i = 0; i < array.length; i++){
        if(array[i] == CORRECT_ANSWER[idx_quiz][i]){
            total_score = total_score + 100;
        }
    }
    total_score /= CORRECT_ANSWER[idx_quiz].length;
}