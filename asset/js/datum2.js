

function sel_prov1(){
document.getElementById('prov3').innerHTML +="<option>Pilih Provinsi</option><option>Aceh</option> <option>Bali</option>"
+"<option>Banten</option><option>Bengkulu</option><option>Gorontalo</option><option>Jakarta</option><option>Jambi</option>"
+"<option>Jawa Barat</option><option>Jawa Tengah</option><option>Jawa Timur</option><option>Kalimantan Barat</option>"
+"<option>Kalimantan Selatan</option><option>Kalimantan Tengah</option><option>Kalimantan Timur</option><option>Kalimantan Utara</option>"
+"<option>Kepulauan Bangka Belitung</option><option>Kepulauan Riau</option><option>Lampung</option><option>Maluku</option><option>Maluku Utara</option>"
+"<option>Nusa Tenggara Timur</option><option>Nusa Tenggara Barat</option><option>Papua</option><option>Papua Barat</option><option>Riau</option>"
+"<option>Sulawesi Barat</option><option>Sulawesi Selatan</option><option>Sulawesi Tengah</option><option>Sulawesi Tenggara</option><option>Sulawesi Utara</option>"
+"<option>Sumatera Barat</option><option>Sumatera Selatan</option><option>Sumatera Utara</option><option>Yogyakarta</option>";

}

function sel_kab1(prov){
var prov = document.getElementById('prov3').value;
if( prov == 'Aceh'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Aceh</option>"
+"<option>Kabupaten Aceh Barat</option>"
+"<option>Kabupaten Aceh Barat Daya</option>" 
+"<option>Kabupaten Aceh Besar</option>" 
+"<option>Kabupaten Aceh Jaya</option>" 
+"<option>Kabupaten Aceh Selatan</option>" 
+"<option>Kabupaten Aceh Singkil</option>" 
+"<option>Kabupaten Aceh Tamiang</option>" 
+"<option>Kabupaten Aceh Tengah</option>" 
+"<option>Kabupaten Aceh Tenggara</option>" 
+"<option>Kabupaten Aceh Timur</option>" 
+"<option>Kabupaten Aceh Utara</option>" 
+"<option>Kabupaten Bener Meriah</option>" 
+"<option>Kabupaten Bireuen</option>" 
+"<option>Kabupaten Gayo Lues</option>" 
+"<option>Kabupaten Nagan Raya</option>" 
+"<option>Kabupaten Pidie</option>" 
+"<option>Kabupaten Pidie Jaya</option>" 
+"<option>Kabupaten Simeulue</option>" 
+"<option>Kota Banda Aceh</option>" 
+"<option>Kota Langsa</option>" 
+"<option>Kota Lhokseumawe</option>" 
+"<option>Kota Sabang</option>" 
+"<option>Kota Gosong Telaga</option>" 
+"<option>Kota Kuta Alang</option>" 
+"<option>Kota Piding</option>" 
+"<option>Kota Subulussalam</option>";
}else if( prov == 'Bali'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Bali</option>"
+"<option>Kabupaten Badung</option>"
+"<option>Kabupaten Bangli</option>"
+"<option>Kabupaten Buleleng</option>"
+"<option>Kabupaten Gianyar</option>"
+"<option>Kabupaten Jembrana</option>"
+"<option>Kabupaten Karangasem</option>"
+"<option>Kabupaten Klungkung</option>"
+"<option>Kabupaten Tabanan</option>"
+"<option>Kabupaten Negara</option>"
+"<option>Kabupaten Singaraja</option>"
+"<option>Kota Denpasar</option>";
}else if( prov == 'Banten'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Banten</option>"
+"<option>Kabupaten Lebak</option>"
+"<option>Kabupaten Pandeglang</option>" 
+"<option>Kabupaten Serang</option>" 
+"<option>Kabupaten Tangerang</option>" 
+"<option>Kota Cilegon</option>" 
+"<option>Kota Serang</option>" 
+"<option>Kota Tangerang</option>" 
+"<option>Kota Tangerang Selatan</option>";
}else if( prov == 'Bengkulu'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Bengkulu</option>"
+"<option>kabupaten Bengkulu Selatan</option>"
+"<option>kabupaten Bengkulu Tengah</option>" 
+"<option>kabupaten Bengkulu Utara</option>"
+"<option>kabupaten Kaur</option>"
+"<option>kabupaten Kepahiang</option>"
+"<option>kabupaten Lebong</option>"
+"<option>kabupaten Mukomuko</option>"
+"<option>kabupaten Rejang Lebong</option>"
+"<option>kabupaten Seluma</option>" 
+"<option>kota Bengkulu</option>";
}else if( prov == 'Gorontalo'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Gorontalo</option>"
+"<option>Kabupaten Boalemo</option>"
+"<option>Kabupaten Bone Bolango</option>"
+"<option>Kabupaten Gorontalo</option>" 
+"<option>Kabupaten Gorontalo Utara</option>" 
+"<option>Kabupaten Pohuwato</option>" 
+"<option>Kota Gorontalo</option>";
}else if( prov == 'Jakarta'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Jakarta</option>"
+"<option>kabupaten  Kepulauan Seribu</option>"
+"<option>kota  Jakarta Barat</option>"
+"<option>kota  Jakarta Pusat</option>"
+"<option>kota  Jakarta Selatan</option>"
+"<option>kota  Jakarta Timur</option>"
+"<option>kota  Jakarta Utara</option>";
}else if( prov == 'Jambi'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Jambi</option>"
+"<option>kabupaten Batanghari</option>" 
+"<option>kabupaten Bungo</option>" 
+"<option>kabupaten Kerinci</option>" 
+"<option>kabupaten Merangin</option>" 
+"<option>kabupaten Muaro Jambi</option>" 
+"<option>kabupaten Sarolangun</option>" 
+"<option>kabupaten Tanjung Jabung Barat</option>" 
+"<option>kabupaten Tanjung Jabung Timur</option>" 
+"<option>kabupaten Tebo</option>" 
+"<option>kota Jambi</option>"; 
}else if( prov == 'Jawa Barat'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Jawa Barat</option>"
+"<option>kabupaten Bandung</option>" 
+"<option>kabupaten Bandung Barat</option>" 
+"<option>kabupaten Bekasi</option>" 
+"<option>kabupaten Bogor</option>" 
+"<option>kabupaten Ciamis</option>" 
+"<option>kabupaten Cianjur</option>" 
+"<option>kabupaten Cirebon</option>" 
+"<option>kabupaten Garut</option>" 
+"<option>kabupaten Indramayu</option>" 
+"<option>kabupaten Karawang</option>" 
+"<option>kabupaten Kuningan</option>" 
+"<option>kabupaten Majalengka</option>" 
+"<option>kabupaten Pangandaran</option>" 
+"<option>kabupaten Purwakarta</option>" 
+"<option>kabupaten Subang</option>" 
+"<option>kabupaten Sukabumi</option>" 
+"<option>kabupaten Sumedang</option>" 
+"<option>kabupaten Tasikmalaya</option>" 
+"<option>kota Bandung</option>" 
+"<option>kota Banjar</option>" 
+"<option>kota Bekasi</option>" 
+"<option>kota Bogor</option>" 
+"<option>kota Cimahi</option>" 
+"<option>kota Cirebon</option>" 
+"<option>kota Depok</option>" 
+"<option>kota Sukabumi</option>" 
+"<option>kota Tasikmalaya</option>"; 
}else if( prov == 'Jawa Tengah'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Jawa Tengah</option>"
+"<option>kabupaten Banjarnegara</option>"  
+"<option>kabupaten Banyumas</option>"  
+"<option>kabupaten Batang</option>"  
+"<option>kabupaten Blora</option>"  
+"<option>kabupaten Boyolali</option>"  
+"<option>kabupaten Brebes</option>"  
+"<option>kabupaten Cilacap</option>"  
+"<option>kabupaten Demak</option>"  
+"<option>kabupaten Grobogan</option>"  
+"<option>kabupaten Jepara</option>"  
+"<option>kabupaten Karanganyar</option>"  
+"<option>kabupaten Kebumen</option>"  
+"<option>kabupaten Kendal</option>"  
+"<option>kabupaten Klaten</option>"  
+"<option>kabupaten Kudus</option>"  
+"<option>kabupaten Magelang</option>"  
+"<option>kabupaten Pati</option>"  
+"<option>kabupaten Pekalongan</option>"  
+"<option>kabupaten Pemalang</option>"  
+"<option>kabupaten Purbalingga</option>"  
+"<option>kabupaten Purworejo</option>"  
+"<option>kabupaten Rembang</option>"  
+"<option>kabupaten Semarang</option>"  
+"<option>kabupaten Sragen</option>"  
+"<option>kabupaten Sukoharjo</option>"  
+"<option>kabupaten Tegal</option>"  
+"<option>kabupaten Temanggung</option>"  
+"<option>kabupaten Wonogiri</option>"  
+"<option>kabupaten Wonosobo</option>"  
+"<option>Kota Magelang</option>"  
+"<option>Kota Pekalongan</option>"  
+"<option>Kota Salatiga</option>"  
+"<option>Kota Semarang</option>"  
+"<option>Kota Surakarta</option>"  
+"<option>Kota Tegal</option>" ; 
}else if( prov == 'Jawa Timur'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Jawa Timur</option>"
+"<option>kabupaten Bangkalan</option>"
+"<option>kabupaten Banyuwangi</option>"  
+"<option>kabupaten Blitar</option>"  
+"<option>kabupaten Bojonegoro</option>"  
+"<option>kabupaten Bondowoso</option>"  
+"<option>kabupaten Gresik</option>"  
+"<option>kabupaten Jember</option>"  
+"<option>kabupaten Jombang</option>"  
+"<option>kabupaten Kediri</option>"  
+"<option>kabupaten Lamongan</option>"  
+"<option>kabupaten Lumajang</option>"  
+"<option>kabupaten Madiun</option>"  
+"<option>kabupaten Magetan</option>"  
+"<option>kabupaten Malang</option>"  
+"<option>kabupaten Mojokerto</option>"  
+"<option>kabupaten Nganjuk</option>"  
+"<option>kabupaten Ngawi</option>"  
+"<option>kabupaten Pacitan</option>"  
+"<option>kabupaten Pamekasan</option>"  
+"<option>kabupaten Pasuruan</option>"  
+"<option>kabupaten Ponorogo</option>"  
+"<option>kabupaten Probolinggo</option>"  
+"<option>kabupaten Sampang</option>"  
+"<option>kabupaten Sidoarjo</option>"  
+"<option>kabupaten Situbondo</option>"  
+"<option>kabupaten Sumenep</option>"  
+"<option>kabupaten Trenggalek</option>"  
+"<option>kabupaten Tuban</option>"  
+"<option>kabupaten Tulungagung</option>"  
+"<option>kota Batu</option>"  
+"<option>kota Blitar</option>"  
+"<option>kota Kediri</option>"  
+"<option>kota Madiun</option>"  
+"<option>kota Malang</option>"  
+"<option>kota Mojokerto</option>"  
+"<option>kota Pasuruan</option>"  
+"<option>kota Probolinggo</option>"  
+"<option>kota Surabaya</option>" ; 
}else if( prov == 'Kalimantan Barat'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kalimantan Barat</option>"
+"<option>kabupaten Bengkayang</option>" 
+"<option>kabupaten Kapuas Hulu</option>" 
+"<option>kabupaten Kayong Utara</option>" 
+"<option>kabupaten Ketapang</option>" 
+"<option>kabupaten Kubu Raya</option>" 
+"<option>kabupaten Landak</option>" 
+"<option>kabupaten Melawi</option>" 
+"<option>kabupaten Mempawah</option>" 
+"<option>kabupaten Sambas</option>" 
+"<option>kabupaten Sanggau</option>" 
+"<option>kabupaten Sekadau</option>" 
+"<option>kabupaten Sintang</option>" 
+"<option>kota Pontianak</option>" 
+"<option>kota Singkawang</option>";
}else if( prov == 'Kalimantan Selatan'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kalimantan Selatan</option>"
+"<option>kabupaten Balangan</option>"  
+"<option>kabupaten Banjar</option>"  
+"<option>kabupaten Barito Kuala</option>"  
+"<option>kabupaten Hulu Sungai Selatan</option>"  
+"<option>kabupaten Hulu Sungai Tengah</option>"  
+"<option>kabupaten Hulu Sungai Utara</option>"  
+"<option>kabupaten kotabaru</option>"  
+"<option>kabupaten Tabalong</option>"  
+"<option>kabupaten Tanah Bumbu</option>"  
+"<option>kabupaten Tanah Laut</option>"  
+"<option>kabupaten Tapin</option>"  
+"<option>kota Banjarbaru</option>"  
+"<option>kota Banjarmasin</option>";
}else if( prov == 'Kalimantan Tengah'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kalimantan Tengah</option>"
+"<option>kabupaten Barito Selatan</option>"  
+"<option>kabupaten Barito Timur</option>"  
+"<option>kabupaten Barito Utara</option>"  
+"<option>kabupaten Gunung Mas</option>"  
+"<option>kabupaten Kapuas</option>"  
+"<option>kabupaten Katingan</option>"  
+"<option>kabupaten kotawaringin Barat</option>"  
+"<option>kabupaten kotawaringin Timur</option>"  
+"<option>kabupaten Lamandau</option>"  
+"<option>kabupaten Murung Raya</option>"  
+"<option>kabupaten Pulang Pisau</option>"  
+"<option>kabupaten Sukamara</option>"  
+"<option>kabupaten Seruyan</option>"  
+"<option>kota Palangka Raya</option>"; 
}else if( prov == 'Kalimantan Timur'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kalimantan Timur</option>"
+"<option>kabupaten Berau</option>"
+"<option>kabupaten Kutai Barat</option>"  
+"<option>kabupaten Kutai Kartanegara</option>"  
+"<option>kabupaten Kutai Timur</option>"  
+"<option>kabupaten Mahakam Ulu</option>"  
+"<option>kabupaten Paser</option>"  
+"<option>kabupaten Penajam Paser Utara</option>"  
+"<option>kota Balikpapan</option>"  
+"<option>kota Bontang</option>"  
+"<option>kota Samarinda</option>";  

}else if( prov == 'Kalimantan Utara'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kalimantan Utara</option>"
+"<option>kabupaten Bulungan</option>" 
+"<option>kabupaten Malinau</option>"
+"<option>kabupaten Nunukan</option>" 
+"<option>kabupaten Tana Tidung</option>" 
+"<option>kota Tarakan</option>";
}else if( prov == 'Kepulauan Bangka Belitung'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kepulauan Bangka Belitung</option>"
+"<option>kabupaten Bangka</option>"  
+"<option>kabupaten Bangka Barat</option>"  
+"<option>kabupaten Bangka Selatan</option>"  
+"<option>kabupaten Bangka Tengah</option>"  
+"<option>kabupaten Belitung</option>"  
+"<option>kabupaten Belitung Timur</option>"  
+"<option>kota Pangkal Pinang</option>"; 
}else if( prov == 'Kepulauan Riau'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Kepulauan Riau</option>"
+"<option>kabupaten Bintan Kepulauan</option>"   
+"<option>kabupaten Karimun</option>"   
+"<option>kabupaten Kepulauan Anambas</option>"   
+"<option>kabupaten Lingga</option>"   
+"<option>kabupaten Natuna</option>"   
+"<option>kota Batam</option>"   
+"<option>kota Tanjung Pinang</option>" ; 
}else if( prov == 'Lampung'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Lampung</option>"
+"<option>kabupaten Lampung Barat</option>"  
+"<option>kabupaten Lampung Selatan</option>"  
+"<option>kabupaten Lampung Tengah</option>"  
+"<option>kabupaten Lampung Timur</option>"  
+"<option>kabupaten Lampung Utara</option>"  
+"<option>kabupaten Mesuji</option>"  
+"<option>kabupaten Pesawaran</option>"  
+"<option>kabupaten Pesisir Barat</option>"  
+"<option>kabupaten Pringsewu</option>"  
+"<option>kabupaten Tanggamus</option>"  
+"<option>kabupaten Tulang Bawang</option>"  
+"<option>kabupaten Tulang Bawang Barat</option>"  
+"<option>kabupaten Way Kanan</option>"  
+"<option>kota Bandar Lampung</option>"  
+"<option>kota Metro</option>"; 
}else if( prov == 'Maluku'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Maluku</option>"
+"<option>kabupaten Buru</option>"			 
+"<option>kabupaten Buru Selatan</option>" 
+"<option>kabupaten Kepulauan Aru</option>" 
+"<option>kabupaten Maluku Barat Daya</option>" 
+"<option>kabupaten Maluku Tengah</option>" 
+"<option>kabupaten Maluku Tenggara</option>" 
+"<option>kabupaten Maluku Tenggara Barat</option>" 
+"<option>kabupaten Seram Bagian Barat</option>" 
+"<option>kabupaten Seram Bagian Timur</option>" 
+"<option>kota Ambon</option>" 
+"<option>kota Tual</option>"; 
}else if( prov == 'Maluku Utara'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Maluku Utara</option>"
+"<option>kabupaten Halmahera Barat</option>"	 
+"<option>kabupaten Halmahera Tengah</option>"	 
+"<option>kabupaten Halmahera Timur</option>"	 
+"<option>kabupaten Halmahera Selatan</option>"	 
+"<option>kabupaten Halmahera Utara</option>"	 
+"<option>kabupaten Kepulauan Sula</option>"	 
+"<option>kabupaten Pulau Morotai</option>"	 
+"<option>kabupaten Pulau Taliabu</option>"	 
+"<option>kota Ternate</option>"	 
+"<option>kota Tidore Kepulauan</option>";	 
}else if( prov == 'Nusa Tenggara Timur'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Nusa Tenggara Timur</option>"
+"<option>kabupaten Alor</option>" 
+"<option>kabupaten Belu</option>" 
+"<option>kabupaten Ende</option>" 
+"<option>kabupaten Flores Timur</option>" 
+"<option>kabupaten Kupang</option>" 
+"<option>kabupaten Lembata</option>" 
+"<option>kabupaten Malaka</option>" 
+"<option>kabupaten Manggarai</option>" 
+"<option>kabupaten Manggarai Barat</option>" 
+"<option>kabupaten Manggarai Timur</option>" 
+"<option>kabupaten Ngada</option>" 
+"<option>kabupaten Nagekeo</option>" 
+"<option>kabupaten Rote Ndao</option>" 
+"<option>kabupaten Sabu Raijua</option>" 
+"<option>kabupaten Sikka</option>" 
+"<option>kabupaten Sumba Barat</option>" 
+"<option>kabupaten Sumba Barat Daya</option>" 
+"<option>kabupaten Sumba Tengah</option>" 
+"<option>kabupaten Sumba Timur</option>" 
+"<option>kabupaten Timor Tengah Selatan</option>" 
+"<option>kabupaten Timor Tengah Utara</option>" 
+"<option>kota Kupang</option>"; 
}else if( prov == 'Nusa Tenggara Barat'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Nusa Tenggara Barat</option>"
+"<option>kabupaten Bima</option>"  
+"<option>kabupaten Dompu</option>"  
+"<option>kabupaten Lombok Barat</option>"  
+"<option>kabupaten Lombok Tengah</option>"  
+"<option>kabupaten Lombok Timur</option>"  
+"<option>kabupaten Lombok Utara</option>"  
+"<option>kabupaten Sumbawa</option>"  
+"<option>kabupaten Sumbawa Barat</option>"  
+"<option>kota Bima</option>"  
+"<option>kota Mataram</option>" ; 
}else if( prov == 'Papua'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Papua</option>"
+"<option>kabupaten Asmat</option>" 
+"<option>kabupaten Biak Numfor</option>" 
+"<option>kabupaten Boven Digoel</option>" 
+"<option>kabupaten Deiyai</option>" 
+"<option>kabupaten Dogiyai</option>" 
+"<option>kabupaten Intan Jaya</option>" 
+"<option>kabupaten Jayapura</option>" 
+"<option>kabupaten Jayawijaya</option>" 
+"<option>kabupaten Keerom</option>" 
+"<option>kabupaten Kepulauan Yapen</option>" 
+"<option>kabupaten Lanny Jaya</option>" 
+"<option>kabupaten Mamberamo Raya</option>" 
+"<option>kabupaten Mamberamo Tengah</option>" 
+"<option>kabupaten Mappi</option>" 
+"<option>kabupaten Merauke</option>" 
+"<option>kabupaten Mimika</option>" 
+"<option>kabupaten Nabire</option>" 
+"<option>kabupaten Nduga</option>" 
+"<option>kabupaten Paniai</option>" 
+"<option>kabupaten Pegunungan Bintang</option>" 
+"<option>kabupaten Puncak</option>" 
+"<option>kabupaten Puncak Jaya</option>" 
+"<option>kabupaten Sarmi</option>" 
+"<option>kabupaten Supiori</option>" 
+"<option>kabupaten Tolikara</option>" 
+"<option>kabupaten Waropen</option>" 
+"<option>kabupaten Yahukimo</option>" 
+"<option>kabupaten Yalimo</option>" 
+"<option>kota Jayapura</option>";
}else if( prov == 'Papua Barat'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Papua Barat</option>"
+"<option>kabupaten Fakfak</option>" 
+"<option>kabupaten Kaimana</option>" 
+"<option>kabupaten Manokwari</option>" 
+"<option>kabupaten Manokwari Selatan</option>" 
+"<option>kabupaten Maybrat</option>" 
+"<option>kabupaten Pegunungan Arfak</option>" 
+"<option>kabupaten Raja Ampat</option>" 
+"<option>kabupaten Sorong</option>" 
+"<option>kabupaten Sorong Selatan</option>" 
+"<option>kabupaten Tambrauw</option>" 
+"<option>kabupaten Teluk Bintuni</option>" 
+"<option>kabupaten Teluk Wondama</option>" 
+"<option>kota Sorong</option>"; 
}else if( prov == 'Riau'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Papua Riau</option>"
+"<option>kabupaten Bengkalis</option>"  
+"<option>kabupaten Indragiri Hilir</option>"  
+"<option>kabupaten Indragiri Hulu</option>"  
+"<option>kabupaten Kampar</option>"  
+"<option>kabupaten Kepulauan Meranti</option>"  
+"<option>kabupaten Kuantan Singingi</option>"  
+"<option>kabupaten Pelalawan</option>"  
+"<option>kabupaten Rokan Hilir</option>"  
+"<option>kabupaten Rokan Hulu</option>"  
+"<option>kabupaten Siak</option>"  
+"<option>kota Dumai</option>"  
+"<option>kota Pekanbaru</option>";
}else if( prov == 'Sulawesi Barat'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sulawesi Barat</option>"
+"<option>kabupaten Majene</option>"
+"<option>kabupaten Mamasa</option>" 
+"<option>kabupaten Mamuju</option>" 
+"<option>kabupaten Mamuju Tengah</option>" 
+"<option>kabupaten Mamuju Utara</option>" 
+"<option>kabupaten Polewali Mandar</option>"; 
}else if( prov == 'Sulawesi Selatan'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sulawesi Selatan</option>"
+"<option>kabupaten Bantaeng</option>" 
+"<option>kabupaten Barru</option>" 
+"<option>kabupaten Bone</option>" 
+"<option>kabupaten Bulukumba</option>" 
+"<option>kabupaten Enrekang</option>" 
+"<option>kabupaten Gowa</option>" 
+"<option>kabupaten Jeneponto</option>" 
+"<option>kabupaten Kepulauan Selayar</option>" 
+"<option>kabupaten Luwu</option>" 
+"<option>kabupaten Luwu Timur</option>" 
+"<option>kabupaten Luwu Utara</option>" 
+"<option>kabupaten Maros</option>" 
+"<option>kabupaten Pangkajene dan Kepulauan</option>" 
+"<option>kabupaten Pinrang</option>" 
+"<option>kabupaten Sidenreng Rappang</option>" 
+"<option>kabupaten Sinjai</option>" 
+"<option>kabupaten Soppeng</option>" 
+"<option>kabupaten Takalar</option>" 
+"<option>kabupaten Tana Toraja</option>" 
+"<option>kabupaten Toraja Utara</option>" 
+"<option>kabupaten Wajo</option>" 
+"<option>kota Makassar</option>" 
+"<option>kota Palopo</option>" 
+"<option>kota Parepare</option>"; 
}else if( prov == 'Sulawesi Tengah'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sulawesi Tengah</option>"
+"<option>kabupaten Banggai</option>" 
+"<option>kabupaten Banggai Kepulauan</option>" 
+"<option>kabupaten Banggai Laut</option>" 
+"<option>kabupaten Buol</option>" 
+"<option>kabupaten Donggala</option>" 
+"<option>kabupaten Morowali</option>" 
+"<option>kabupaten Morowali Utara</option>" 
+"<option>kabupaten Parigi Moutong</option>" 
+"<option>kabupaten Poso</option>" 
+"<option>kabupaten Sigi</option>" 
+"<option>kabupaten Tojo Una-Una</option>" 
+"<option>kabupaten Tolitoli</option>" 
+"<option>kota Palu</option>";
}else if( prov == 'Sulawesi Tenggara'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sulawesi Tengah</option>"
+"<option>kabupaten Bombana</option>"  
+"<option>kabupaten Buton</option>"  
+"<option>kabupaten Buton Selatan</option>"  
+"<option>kabupaten Buton Tengah</option>"  
+"<option>kabupaten Buton Utara</option>"  
+"<option>kabupaten Kolaka</option>"  
+"<option>kabupaten Kolaka Timur</option>"  
+"<option>kabupaten Kolaka Utara</option>"  
+"<option>kabupaten Konawe</option>"  
+"<option>kabupaten Konawe Kepulauan</option>"  
+"<option>kabupaten Konawe Selatan</option>"  
+"<option>kabupaten Konawe Utara</option>"  
+"<option>kabupaten Muna</option>"  
+"<option>kabupaten Muna Barat</option>"  
+"<option>kabupaten Wakatobi</option>"  
+"<option>kota Bau-Bau</option>"  
+"<option>kota Kendari</option>";
}else if( prov == 'Sulawesi Utara'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sulawesi Utara</option>"
+"<option>kabupaten Bolaang Mongondow</option>"  
+"<option>kabupaten Bolaang Mongondow Selatan</option>"  
+"<option>kabupaten Bolaang Mongondow Timur</option>"  
+"<option>kabupaten Bolaang Mongondow Utara</option>"  
+"<option>kabupaten Kepulauan Sangihe</option>"  
+"<option>kabupaten Kepulauan Siau Tagulandang Biaro</option>"  
+"<option>kabupaten Kepulauan Talaud</option>"  
+"<option>kabupaten Minahasa</option>"  
+"<option>kabupaten Minahasa Selatan</option>"  
+"<option>kabupaten Minahasa Tenggara</option>"  
+"<option>kabupaten Minahasa Utara</option>"  
+"<option>kota Bitung</option>"  
+"<option>kota kotamobagu</option>"  
+"<option>kota Manado</option>"  
+"<option>kota Tomohon</option>";
}else if( prov == 'Sumatera Barat'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sumatera Barat</option>"
+"<option>kabupaten Agam</option>" 
+"<option>kabupaten Dharmasraya</option>"
+"<option>kabupaten Kepulauan Mentawai</option>" 
+"<option>kabupaten Lima Puluh kota</option>"  
+"<option>kabupaten Padang Pariaman</option>"
+"<option>kabupaten Pasaman</option>" 
+"<option>kabupaten Pasaman Barat</option>" 
+"<option>kabupaten Pesisir Selatan</option>" 
+"<option>kabupaten Sijunjung</option>" 
+"<option>kabupaten Solok</option>" 
+"<option>kabupaten Solok Selatan</option>" 
+"<option>kabupaten Tanah Datar</option>" 
+"<option>kota Bukittinggi</option>" 
+"<option>kota Padang</option>" 
+"<option>kota Padangpanjang</option>" 
+"<option>kota Pariaman</option>" 
+"<option>kota Payakumbuh</option>" 
+"<option>kota Sawahlunto</option>" 
+"<option>kota Solok</option>"; 
}else if( prov == 'Sumatera Selatan'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sumatera Selatan</option>"
+"<option>kabupaten Banyuasin</option>" 
+"<option>kabupaten Empat Lawang</option>" 
+"<option>kabupaten Lahat</option>" 
+"<option>kabupaten Muara Enim</option>" 
+"<option>kabupaten Musi Banyuasin</option>" 
+"<option>kabupaten Musi Rawas</option>" 
+"<option>kabupaten Musi Rawas Utara</option>" 
+"<option>kabupaten Ogan Ilir</option>" 
+"<option>kabupaten Ogan Komering Ilir</option>" 
+"<option>kabupaten Ogan Komering Ulu</option>" 
+"<option>kabupaten Ogan Komering Ulu Selatan</option>" 
+"<option>kabupaten Ogan Komering Ulu Timur</option>" 
+"<option>kabupaten Penukal Abab Lematang Ilir</option>" 
+"<option>kota Lubuklinggau</option>" 
+"<option>kota Pagar Alam</option>" 
+"<option>kota Palembang</option>" 
+"<option>kota Prabumulih</option>"; 
}else if( prov == 'Sumatera Utara'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sumatera Utara</option>"
+"<option>kabupaten Asahan</option>"  
+"<option>kabupaten Batubara</option>"  
+"<option>kabupaten Dairi</option>"  
+"<option>kabupaten Deli Serdang</option>"  
+"<option>kabupaten Humbang Hasundutan</option>"  
+"<option>kabupaten Karo</option>"  
+"<option>kabupaten Labuhanbatu</option>"  
+"<option>kabupaten Labuhanbatu Selatan</option>"  
+"<option>kabupaten Labuhanbatu Utara</option>"  
+"<option>kabupaten Langkat</option>"  
+"<option>kabupaten Mandailing Natal</option>"  
+"<option>kabupaten Nias</option>"  
+"<option>kabupaten Nias Barat</option>"  
+"<option>kabupaten Nias Selatan</option>"  
+"<option>kabupaten Nias Utara</option>"  
+"<option>kabupaten Padang Lawas</option>"  
+"<option>kabupaten Padang Lawas Utara</option>"  
+"<option>kabupaten Pakpak Bharat</option>"  
+"<option>kabupaten Samosir</option>"  
+"<option>kabupaten Serdang Bedagai</option>"  
+"<option>kabupaten Simalungun</option>"  
+"<option>kabupaten Tapanuli Selatan</option>"  
+"<option>kabupaten Tapanuli Tengah</option>"  
+"<option>kabupaten Tapanuli Utara</option>"  
+"<option>kabupaten Toba Samosir</option>"  
+"<option>kota Binjai</option>"  
+"<option>kota Gunungsitoli</option>"  
+"<option>kota Medan</option>"  
+"<option>kota Padangsidempuan</option>"  
+"<option>kota Pematangsiantar</option>"  
+"<option>kota Sibolga</option>"  
+"<option>kota Tanjungbalai</option>"  
+"<option>kota Tebing Tinggi</option>"; 
}else if( prov == 'Sumatera Selatan'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sumatera Selatan</option>"
+"<option>kabupaten Banyuasin</option>" 
+"<option>kabupaten Empat Lawang</option>" 
+"<option>kabupaten Lahat</option>" 
+"<option>kabupaten Muara Enim</option>" 
+"<option>kabupaten Musi Banyuasin</option>" 
+"<option>kabupaten Musi Rawas</option>" 
+"<option>kabupaten Musi Rawas Utara</option>" 
+"<option>kabupaten Ogan Ilir</option>" 
+"<option>kabupaten Ogan Komering Ilir</option>" 
+"<option>kabupaten Ogan Komering Ulu</option>" 
+"<option>kabupaten Ogan Komering Ulu Selatan</option>" 
+"<option>kabupaten Ogan Komering Ulu Timur</option>" 
+"<option>kabupaten Penukal Abab Lematang Ilir</option>" 
+"<option>kota Lubuklinggau</option>" 
+"<option>kota Pagar Alam</option>" 
+"<option>kota Palembang</option>" 
+"<option>kota Prabumulih</option>"; 
}else if( prov == 'Sumatera Utara'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Sumatera Utara</option>"
+"<option>kabupaten Asahan</option>"  
+"<option>kabupaten Batubara</option>"  
+"<option>kabupaten Dairi</option>"  
+"<option>kabupaten Deli Serdang</option>"  
+"<option>kabupaten Humbang Hasundutan</option>"  
+"<option>kabupaten Karo</option>"  
+"<option>kabupaten Labuhanbatu</option>"  
+"<option>kabupaten Labuhanbatu Selatan</option>"  
+"<option>kabupaten Labuhanbatu Utara</option>"  
+"<option>kabupaten Langkat</option>"  
+"<option>kabupaten Mandailing Natal</option>"  
+"<option>kabupaten Nias</option>"  
+"<option>kabupaten Nias Barat</option>"  
+"<option>kabupaten Nias Selatan</option>"  
+"<option>kabupaten Nias Utara</option>"  
+"<option>kabupaten Padang Lawas</option>"  
+"<option>kabupaten Padang Lawas Utara</option>"  
+"<option>kabupaten Pakpak Bharat</option>"  
+"<option>kabupaten Samosir</option>"  
+"<option>kabupaten Serdang Bedagai</option>"  
+"<option>kabupaten Simalungun</option>"  
+"<option>kabupaten Tapanuli Selatan</option>"  
+"<option>kabupaten Tapanuli Tengah</option>"  
+"<option>kabupaten Tapanuli Utara</option>"  
+"<option>kabupaten Toba Samosir</option>"  
+"<option>kota Binjai</option>"  
+"<option>kota Gunungsitoli</option>"  
+"<option>kota Medan</option>"  
+"<option>kota Padangsidempuan</option>"  
+"<option>kota Pematangsiantar</option>"  
+"<option>kota Sibolga</option>"  
+"<option>kota Tanjungbalai</option>"  
+"<option>kota Tebing Tinggi</option>"; 
}else if( prov == 'Yogyakarta'){
document.getElementById('kab3').innerHTML="<option>Pilih Kabupaten/Kota Yogyakarta</option>"
+"<option>kabupaten Bantul</option>" 
+"<option>kabupaten Gunungkidul</option>" 
+"<option>kabupaten Kulon Progo</option>" 
+"<option>kabupaten Sleman</option>" 
+"<option>kota Yogyakarta</option>";
}
}