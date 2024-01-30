//Membuat Game Suwit Jawa : orang, gajah, semut (TITLE)

var tanya = true
while(tanya)    {
    //menginput dan menanggapi pilihan player dari user
    var p = prompt('pilih : gajah, semut, orang')

    //Menangkap pilihan komputer
    //membangkitkan bilangan random
    var comp = Math.random()

    if(comp < 0.34) {
        comp = 'gajah';
    }
    else if(comp >= 0.34 && comp < 0.67)    {
        comp = 'orang';
    }
    else    {
        comp = 'semut'
    }

    var hasil = ''
    //menentukan rules
    if(p == comp)   {
        hasil = 'SERI!';
    }
    else if(p == 'gajah')   {
        //if(comp == 'orang')   {
            //hasil = 'MENANG!';
            //  }
            //else  {
                //hasil = 'KALAH!';
            //  }
            hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    }
    else if(p == 'orang')   {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    }
    else if(p == 'semut')   {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    }
    else    {
        hasil = 'Memasukkan pilihan yang salah!';
    }

    //tampilkan hasilnya
    //console.log("Kamu memilih : "+ p + " dan komputer memilih : " + comp + "\nmaka hasilnya : Kamu " + hasil); //Jika pakai console
    alert("Kamu memilih : "+ p + " , sedangkan\n komputer memilih : " + comp + "\nmaka hasilnya : Kamu " + hasil); //Jika pakai browser

    //console.log("Lagi?"); //jika pakai terminal console
    tanya = confirm('Lagi?'); //jika pakai browser

        }
    
//console.log("Terima kasih sudah bermain!") //jika pakai terminal       
alert("Terima kasih sudah bermain!") //jika pakai browser

