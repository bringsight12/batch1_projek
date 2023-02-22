// Buatlah sebuah function tambahDataFilm yang menambahkan object ke array. Dengan menampilkan output sebagai berikut :
// 	[
// 		{Judul: "Infinity War, durasi: "2 Jam", genre: "Action", Tahun: "2019"}
// 		{Judul: "End Game", durasi: "3 Jam", genre: "Action", Tahun: "2019"}
// 		{Judul: "Captain Marvel", durasi: "2 Jam", genre: "Action", Tahun: "2018"}
// 		{Judul: "Doctor Strange," durasi: "2 Jam", genre: "Action", Tahun: "2018"}
// 		{Judul: "Iron Man 1," durasi: "2 Jam", genre: "Action", Tahun: "2008"}
// 	]


let films = [];

function DataFilm(judul, durasi, genre, tahun) {
 
  films.push({
    Judul: judul,
    Durasi: durasi,
    Genre: genre,
    Tahun: tahun
  });
}


DataFilm("Infinity War", "2 Jam", "Action", "2019");
DataFilm("End Game", "3 Jam", "Action", "2019");
DataFilm("Captain Marvel", "2 Jam", "Action", "2018");
DataFilm("Doctor Strange", "2 Jam", "Action", "2018");
DataFilm("Iron Man 1", "2 Jam", "Action", "2008");

console.log(films);
