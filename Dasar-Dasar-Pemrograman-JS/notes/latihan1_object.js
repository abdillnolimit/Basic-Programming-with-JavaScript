//membuat object angkot

function Angkot(supir, trayek, penumpang, kas)  {
    this.supir     = supir;
    this.trayek    = trayek;
    this.penumpang = penumpang;
    this.kas       = kas ; 

    this.penumpangNaik = function(namaPenumpang)    {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar)    {

        if(this.penumpang.length === 0 )    {
            console.log('angkot masih kosong!');
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++)  {
            if( this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Budi', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom' ], [], 0);


//studi kasus

console.log("===== Angkot 1 =====")
console.log(angkot1); 

console.log("\n\n===== Angkot 2 =====")
console.log(angkot2)


angkot1.penumpangNaik('Human1');
angkot1.penumpangNaik('Human2');


console.log("\n===== Kas Angkot 1 setelah Human 1 turun : ")
angkot1.penumpangTurun('Human1', 3000);
console.log(angkot1.kas)



console.log("===== Kas Angkot 1 setelah Human 2 turun : ")
angkot1.penumpangTurun('Human2', 3000);
console.log(angkot1.kas)

