listPembelian = [];

var arrayBarang = [
   {
      kode: '001',
      barang: 'Barang A',
      harga: 10000,
   },
   {
      kode: '002',
      barang: 'Barang B',
      harga: 20000,
   },
   {
      kode: '003',
      barang: 'Barang C',
      harga: 30000,
   },
];

// var kodeBarang = arrayBarang.reduce((total, item)=> total += item.kode,0)
// var listBarang = arrayBarang.reduce((total, item)=> total += item.barang,0)
// var totalHasil = arrayBarang.reduce((total, item)=> total += item.harga,0)
function addTask() {
   var inputKode = document.getElementById('kode');
   var inputBanyak = document.getElementById('banyak');

   var kodeText = inputKode.value;
   var banyakText = inputBanyak;

   for (let index = 0; index < arrayBarang.kode; index++) {
      const element = arrayBarang[index];
      var hasil = 0;

      if (kodeText === element.kode) {
         hasil = banyakText * element.harga;
      }
   }

   alert(hasil)
}
