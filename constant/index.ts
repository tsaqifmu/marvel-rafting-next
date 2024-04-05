import { appropriate, difficulty, distance, duration, finish } from "@/public/cardPacketDetail";
import { check, ignore } from "@/public/packetDetail";
import {
  arrowRight,
  mapCard,
  paketA,
  paketB,
  paketC,
  paketD,
  time,
} from "@/public/packets";
import { instagram, map, walist, youtube } from "@/public/socialMediaIcons";
import { budi, jaka, oca, petik } from "@/public/testimonial";

export const styles = {
  boxWidth: "xl:max-w-[1050px] w-full h-full",
  boxWidthNavFoot: "xl:max-w-[1280px] w-full h-full",

  heading1: "text-4xl font-extrabold xl:text-6xl",
  paragraph: "text-base font-normal md:text-lg ",

  flexCenter: "flex justify-center items-center w-full h-full",
  flexStart: "flex justify-start items-center",

  paddingX: "px-5 xl:px-0",
  paddingY: "py-10 md:py-16 xl:py-20",
  padding: "px-5 xl:px-0 py-10 md:py-16 xl:py-20",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const about = {
  id: "about",
  title: "Tentang Kami",
  content:
    "Kami adalah Marvel Rafting Magelang, perusahaan yang didirikan dengan tujuan memberikan pengalaman arus deras terbaik bagi setiap orang. Kami berkomitmen untuk memberikan pengalaman rafting yang paling menyenangkan, aman, dan tak terlupakan. Apapun tingkat kemampuanmu, tim kami siap memberikan pengalaman yang mengasyikkan dan berkesan di atas arus deras. Jadilah bagian dari petualangan kami di Marvel Rafting Magelang dan ciptakan momen-momen tak terlupakan bersama kami!",
};

export const navLinks = [
  {
    id: "beranda",
    title: "Beranda",
  },
  {
    id: "tentang",
    title: "Tentang Kami",
  },
  {
    id: "paket",
    title: "Paket Rafting",
  },
  {
    id: "testimoni",
    title: "Testimoni",
  },
];

export const socialMedia = [
  {
    id: "youtube",
    icon: youtube,
    link: "https://www.youtube.com/marvelmagelang",
  },
  {
    id: "map",
    icon: map,
    link: "https://goo.gl/maps/cDgiKzggxC9MjhTT6",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/marvelmagelang.adv/",
  },
  {
    id: "walist",
    icon: walist,
    link: "https://wa.link/4190xr",
  },
];

export const packetLinks = [
  {
    id: "paketA",
    packet: "Paket A",
    title: "Sungai Elo",
    distance: "Jarak 12 KM",
    duration: "Durasi 2,5 jam",
    detail: "Cek Detail",
    img: paketA,
    arrow: arrowRight,
    timeIcon: time,
    mapIcon: mapCard,
  },
  {
    id: "paketB",
    packet: "Paket B",
    title: "Sungai Progo Atas",
    distance: "Jarak 9 KM",
    duration: "Durasi 2 jam",
    detail: "Cek Detail",
    img: paketB,
    arrow: arrowRight,
    timeIcon: time,
    mapIcon: mapCard,
  },
  {
    id: "paketC",
    packet: "Paket C",
    title: "Sungai Progo Hulu",
    distance: "Jarak 18 KM",
    duration: "Durasi 3 jam",
    detail: "Cek Detail",
    img: paketC,
    arrow: arrowRight,
    timeIcon: time,
    mapIcon: mapCard,
  },
  {
    id: "paketD",
    packet: "Paket D",
    title: "Sungai Progo Bawah",
    distance: "Jarak 25 KM",
    duration: "Durasi 6 jam",
    detail: "Cek Detail",
    img: paketD,
    arrow: arrowRight,
    timeIcon: time,
    mapIcon: mapCard,
  },
];

export const testimonials = [
  {
    id: "1",
    text: "Rafting di Marvel Rafting Magelang sungguh seru dan menantang. Pemandangan sungai Elo juga indah. Terima kasih ",
    img: jaka,
    name: "Jaka",
    icon: petik,
  },
  {
    id: "2",
    text: "SATU KATA, MANTAB! ",
    img: budi,
    name: "Budi",
    icon: petik,
  },
  {
    id: "3",
    text: "Main rafting disini seru banget, gak akan pernah kapok buat kesini lagi! ",
    img: oca,
    name: "Oca",
    icon: petik,
  },
];

export const packetDetail = [
  {
    id: "paketA",
    img: paketA,
    packet: "Paket A",
    title: "Sungai Elo",
    resume:
      "Paket Wisata Rafting di Sungai Elo Magelang adalah arung jeram terlaris dan terletak sekitar 45 menit dari Yogyakarta. Sungai Elo memiliki tingkat kesulitan tingkat II-III yang bagus untuk pemula dan rekreasi keluarga, serta cocok untuk Corporate Gathering atau Outbound Perusahaan. Aliran sungai ini relatif stabil disemua musim dan selain rafting, Anda bisa menikmati permainan air seperti flip-flop, spinning, atau berenang-renang. Jika ingin tantangan lebih, Anda dapat mencoba arung jeram di Sungai Progo Atas, Progo Hulu, dan Sungai Progo Bawah",
    distance: "12 KM",
    distanceIcon: distance,
    duration: "2,5 jam",
    durationIcon: duration,
    difficulty: "Tingkat Kesulitan II - III",
    difficultyIcon: difficulty,
    appropriate: "Pemula/keluarga/wisata",
    appropriateIcon: appropriate,
    start: "Start Ds. Pare Ngisor Blondho",
    finish: "Finish  Ds. Mendut Mungkid",
    finishIcon: finish,
    price: "Rp. 600.000 / Boat",
    content: [
      {
        p: "Paket Wisata Rafting Sungai Elo merupakan paket terlaris. Dengan harga tiket  murah serta fasilitas terlengkap.",
      },
      {
        p: "Ketika padatnya rutinitas membuat jenuh, saatnya refresh dan recharge dengan aktifitas seru. Rafting adalah jawabannya, bersama Operator Rafting Sungai Elo terbaik.",
      },
      {
        p: "Lokasi Rafting Sungai Elo terletak di Magelang sekitar 45 menit dari Yogyakarta.  Sehingga lokasi kami sangat mudah dijangkau. ",
      },
      {
        p: "Hulu air sungai ini berasal dari Gunung Merbabu. Aliran sungai ini relatif stabil disemua Musim. Dimusim kemarau, sungai ini tetap bisa diarungi walaupun intensitas air hujan sangat minim turun di hulu-hulu sungai, Kondisi air Sungai Elo pada musim kemarau sangat ideal untuk melakukan berbagai aktivitas air, seperti flip-flop, spinning, atau berenang renang menggunakan pelampung yang telah disediakan. Air yang jernih juga memungkinkan pengunjung menikmati aliran Sungai Elo dengan baik.",
      },
      {
        p: "Dan ketika musim penghujan tiba, sungai ini semakin asik untuk diarungi karena debit air yang bertambah tetapi relatif stabil dan aman. Menjadikan Sungai Elo yang bisa diarungi disegala musim.",
      },
      {
        p: "Kondisi air Sungai Elo pada musim kemarau sangat ideal untuk melakukan berbagai aktivitas air, seperti flip-flop, spinning, atau berenang renang menggunakan pelampung yang telah disediakan. Air yang jernih juga memungkinkan pengunjung menikmati aliran Sungai Elo dengan baik.",
      },
      {
        p: "Keindahan panorama sepanjang sungai adalah daya tarik tersendiri saat melakukan pengarungan di sungai ini.",
      },
      {
        p: "Dengan jarak pengarungan sekitar 12 km, Sungai Elo memiliki rentang kesulitan tingkat II-III yang bagus untuk pemula, menjadikan sungai ini cocok untuk rekreasi keluarga yang menyenangkan sekaligus menantang dan memacu adrenaline.",
      },
      {
        p: "Bagi peserta yang tak bisa berenang pun dapat mengikuti kegiatan ini dengan keseruan yang sama. Jangan khawatir, tersedia pelampung yang wajib dipakai peserta sebelum, dan selama kegiatan berlangsung.",
      },
      {
        p: "Ditengah perjalanan atau enam kilometer berjalan, perahu akan berhenti sejenak di rest area untuk istirahat, foto-foto dan menikmati sajian snack + kelapa muda yang segar yang sudah termasuk di dalam Tiket Masuk Rafting Sungai Elo Magelang.",
      },
      {
        p: "Bagi yang pernah melakukan kegiatan rafting di Sungai Elo. Anda juga bisa mencoba sungai yang lebih tinggi tingkat kesulitan dan tingkat keseruannya yaitu Sungai Progo Atas, Progo Hulu dan Sungai Progo Bawah.",
      },
    ],
    includes: [
      {
        icon: check,
        item: "Peralatan Pengarungan ( Pelampung, Dayung, Helm, Perahu ",
      },
      {
        icon: check,
        item: "Pemandu / River Guide",
      },
      {
        icon: check,
        item: "Makan Prasmanan",
      },
      {
        icon: check,
        item: "Snack Tradisional",
      },
      {
        icon: check,
        item: "Kelapa Muda",
      },
      {
        icon: check,
        item: "Lokal Transport ( Basecamp - Start & Finish )",
      },
      {
        icon: check,
        item: "Retribusi Setempat",
      },
      {
        icon: check,
        item: "P3K Emergency",
      },
      {
        icon: check,
        item: "Asuransi",
      },
      {
        icon: check,
        item: "Basecamp Transit Nyaman ( Kamar Mandi Banyak, Mushola Luas, Gazebo, Ruang Makan Joglo, Parkir Luas)",
      },
      {
        icon: check,
        item: "Parkir Gratis",
      },
    ],
    excludes: [
      {
        icon: ignore,
        item: "Transport menuju Basecamp Kami",
      },
      {
        icon: ignore,
        item: "Biaya Dokumentasi Kegiatan",
      },
      {
        icon: ignore,
        item: "Pengeluaran Pribadi",
      },
    ],
    schedule:
      "Jadwal Pengarungan Rafting Sungai Elo dibagi menjadi 2, yaitu jam berangkat pagi dan jam berangkat siang sebagai berikut:",
    morningSchedule: [
      {
        icon: time,
        time: "08.00",
      },
      {
        icon: time,
        time: "09.00",
      },
      {
        icon: time,
        time: "10.00",
      },
    ],
    afternoonSchedule: [
      {
        icon: time,
        time: "13.00",
      },
      {
        icon: time,
        time: "14.00",
      },
      {
        icon: time,
        time: "15.00",
      },
    ],
    timeTable: [
      {
        time: "08.30 – 08.40",
        activity: "Kedatangan",
      },
      {
        time: "08.40 – 08.50",
        activity: "Persiapan pengarungan",
      },
      {
        time: "08.50 – 09.00",
        activity: "Perjalanan menuju starting point pengarungan",
      },
      {
        time: "09.00 – 09.10",
        activity: "Safety briefing",
      },
      {
        time: "09.10 – 10.00",
        activity: "Pengarungan sungai elo",
      },
      {
        time: "10.00 – 10.15",
        activity: "Rest area sungai menikmati snack & kelapa muda",
      },
      {
        time: "10.15 – 11.45",
        activity: "Melanjutkan pengarungan",
      },
      {
        time: "11.45 – 12.00",
        activity: "Finish, kembali menuju basecamp",
      },
      {
        time: "12.00 – 13.00",
        activity: "Mandi, bilas, ibadah dan makan siang",
      },
      {
        time: "13.00",
        activity: "Selesai, sampai jumpa kembali",
      },
    ],
    equipment:
      "Demi kenyamanan anda saat berkegiatan, kami menyarankan beberapa perlengkapan yang perlu anda persiapkan saat Rafting Sungai Elo.",
    bringIcon: check,
    avoidIcon: ignore,
    brings: [
      {
        icon: check,
        item: "Pakaian yang Nyaman Untuk Kegiatan Outdoor",
      },
      {
        icon: check,
        item: "Pakaian Ganti",
      },
      {
        icon: check,
        item: "Handuk",
      },
      {
        icon: check,
        item: "Peralatan Mandi",
      },
      {
        icon: check,
        item: "Sandal Gunung ( Jika Ada )",
      },
      {
        icon: check,
        item: "Tali Kacamata ( Bila memakai Kacamata )",
      },
      {
        icon: check,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
    avoids: [
      {
        icon: ignore,
        item: "Perhiasan",
      },
      {
        icon: ignore,
        item: "Uang & Dompet",
      },
      {
        icon: ignore,
        item: "Kamera",
      },
      {
        icon: ignore,
        item: "Handphone, bila ingin dibawa bisa memakai waterproof, resiko ditanggung peserta",
      },
      {
        icon: ignore,
        item: "Kunci Kendaraan",
      },
      {
        icon: ignore,
        item: "Barang berharga lainnya",
      },
      {
        icon: ignore,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
  },
  {
    id: "paketB",
    img: paketB,
    packet: "Paket B",
    title: "Sungai Progo Atas",
    resume:
      "Sungai Progo Atas sangat dekat dengan obyek wisata seperti Taman Kyai Langgeng, Candi Mendut dan Candi Borobudur. Untuk jarak tempuh bila anda dari kota Jogjakarta adalah sekitar 50 menit. Jeram-jeram yang dimiliki oleh sungai ini adalah jeram-jeram yang mempunyai kelas III sampai dengan III+, Rafting di Sungai ini mempunyai waktu untuk melakukan wisata arung jeram sekitar 2,5 jam sampai dengan 3 jam.",
    distance: "12 KM",
    distanceIcon: distance,
    duration: "2,5 jam",
    durationIcon: duration,
    difficulty: "Tingkat Kesulitan III – III+",
    difficultyIcon: difficulty,
    appropriate: "Pemula/keluarga/wisata",
    appropriateIcon: appropriate,
    start: "Start Songo Taman Kyai Langgeng",
    finish: "Finish Jembatan Tempuran, Salaman",
    finishIcon: finish,
    price: "Rp. 750.000 / Boat",
    content: [
      {
        p: "Jika Anda sudah mencoba arung jeram di Sungai Elo dan ingin mencari pengalaman yang lebih menantang, maka mungkin saatnya untuk mempertimbangkan Sungai Progo Atas. Meskipun tidak terlalu sulit atau ekstrem, tetapi sungai ini cocok bagi mereka yang sudah memiliki pengalaman sebelumnya dalam beraktivitas arung jeram. Arung jeram di Sungai Progo Atas memberikan pengalaman yang mengasyikkan, dengan derasnya aliran air dan tantangan yang menyenangkan.",
      },
      {
        p: "Liburan di alam menjadi trend masyarakat belakangan ini, dimana aktifitas outdoor seperti hiking, camping dan arung jeram sangat diminati. Rafting di Sungai Progo Atas adalah pilihan yang tepat untuk mengombinasikan liburan alam dengan hiburan adrenalin. Kegiatan arung jeram semakin populer belakangan ini karena menawarkan keseruan dan tantangan yang menyenangkan. Sungai Progo Atas menawarkan pengalaman arung jeram yang tak terlupakan dan menjadi salah satu destinasi wisata yang wajib dikunjungi bagi para pencinta kegiatan outdoor.",
      },
      {
        p: "Sungai Progo, yang mengalir melalui Jawa Tengah dan Daerah Istimewa Yogyakarta, sangat panjang dan menawarkan medan yang beragam. Operator Rafting Magelang telah membaginya menjadi tiga rute yaitu Sungai Progo Hulu, Sungai Progo Atas dan Sungai Progo Bawah. Jeram-jeram di sungai ini bervariasi dari kelas III sampai dengan III+, membuat pengalaman arung jeram di Sungai Progo Atas semakin menarik dan menyenangkan. ",
      },
      {
        p: "Sungai Progo Atas yang dekat dengan Taman Kyai Langgeng, Candi Mendut, dan Candi Borobudur bisa dicapai dengan waktu tempuh sekitar 50 menit dari kota Jogjakarta. Anda dapat menikmati pesona keindahan alam di sepanjang perjalanan menuju lokasi arung jeram, dengan pemandangan sawah hijau dan bukit-bukit yang menghijau. Selain itu, di sepanjang rute arung jeram juga terdapat beberapa spot foto yang sangat instagramable.",
      },
      {
        p: "Ada dua jeram level tertinggi di Sungai Progo Atas yaitu Jeram Ace dan Jeram Rodeo. Kedua jeram tersebut menawarkan tantangan yang luar biasa bagi para penggemar arung jeram. Selain itu, jeram-jeram lainnya di Sungai Progo Atas juga menawarkan tantangan dan keunikan tersendiri, seperti jeram Plop-Plop, jeram Slamet, dan jeram Pengilon. Durasi wisata arung jeram di Sungai Progo Atas berkisar antara 2,5 jam sampai dengan 3 jam, sehingga Anda dapat menikmati pengalaman arung jeram yang lebih lama dan mendalam.",
      },
      {
        p: "Dengan segala keunikan dan keasyikannya, tak heran jika arung jeram di Sungai Progo Atas semakin diminati oleh wisatawan lokal maupun mancanegara. Jadi, jangan lewatkan kesempatan untuk mencoba pengalaman arung jeram yang seru dan mengesankan ini ketika Anda berada di Magelang atau sekitarnya.",
      },
    ],
    includes: [
      {
        icon: check,
        item: "Peralatan Pengarungan ( Pelampung, Dayung, Helm, Perahu ",
      },
      {
        icon: check,
        item: "Pemandu / River Guide",
      },
      {
        icon: check,
        item: "Makan Prasmanan",
      },
      {
        icon: check,
        item: "Snack Tradisional",
      },
      {
        icon: check,
        item: "Kelapa Muda",
      },
      {
        icon: check,
        item: "Lokal Transport ( Basecamp - Start & Finish )",
      },
      {
        icon: check,
        item: "Retribusi Setempat",
      },
      {
        icon: check,
        item: "P3K Emergency",
      },
      {
        icon: check,
        item: "Asuransi",
      },
      {
        icon: check,
        item: "Basecamp Transit Nyaman ( Kamar Mandi Banyak, Mushola Luas, Gazebo, Ruang Makan Joglo, Parkir Luas)",
      },
      {
        icon: check,
        item: "Parkir Gratis",
      },
    ],
    excludes: [
      {
        icon: ignore,
        item: "Transport menuju Basecamp Kami",
      },
      {
        icon: ignore,
        item: "Biaya Dokumentasi Kegiatan",
      },
      {
        icon: ignore,
        item: "Pengeluaran Pribadi",
      },
    ],
    schedule:
      "Jadwal Pengarungan Rafting Sungai Elo dibagi menjadi 2, yaitu jam berangkat pagi dan jam berangkat siang sebagai berikut:",
    morningSchedule: [
      {
        icon: time,
        time: "08.00",
      },
      {
        icon: time,
        time: "09.00",
      },
      {
        icon: time,
        time: "10.00",
      },
    ],
    afternoonSchedule: [
      {
        icon: time,
        time: "13.00",
      },
      {
        icon: time,
        time: "14.00",
      },
      {
        icon: time,
        time: "15.00",
      },
    ],
    timeTable: [
      {
        time: "08.30 – 08.40",
        activity: "Kedatangan",
      },
      {
        time: "08.40 – 08.50",
        activity: "Persiapan pengarungan",
      },
      {
        time: "08.50 – 09.00",
        activity: "Perjalanan menuju starting point pengarungan",
      },
      {
        time: "09.00 – 09.10",
        activity: "Safety briefing",
      },
      {
        time: "09.10 – 10.00",
        activity: "Pengarungan sungai elo",
      },
      {
        time: "10.00 – 10.15",
        activity: "Rest area sungai menikmati snack & kelapa muda",
      },
      {
        time: "10.15 – 11.45",
        activity: "Melanjutkan pengarungan",
      },
      {
        time: "11.45 – 12.00",
        activity: "Finish, kembali menuju basecamp",
      },
      {
        time: "12.00 – 13.00",
        activity: "Mandi, bilas, ibadah dan makan siang",
      },
      {
        time: "13.00",
        activity: "Selesai, sampai jumpa kembali",
      },
    ],
    equipment:
      "Demi kenyamanan anda saat berkegiatan, kami menyarankan beberapa perlengkapan yang perlu anda persiapkan saat Rafting Sungai Elo.",
    bringIcon: check,
    avoidIcon: ignore,
    brings: [
      {
        icon: check,
        item: "Pakaian yang Nyaman Untuk Kegiatan Outdoor",
      },
      {
        icon: check,
        item: "Pakaian Ganti",
      },
      {
        icon: check,
        item: "Handuk",
      },
      {
        icon: check,
        item: "Peralatan Mandi",
      },
      {
        icon: check,
        item: "Sandal Gunung ( Jika Ada )",
      },
      {
        icon: check,
        item: "Tali Kacamata ( Bila memakai Kacamata )",
      },
      {
        icon: check,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
    avoids: [
      {
        icon: ignore,
        item: "Perhiasan",
      },
      {
        icon: ignore,
        item: "Uang & Dompet",
      },
      {
        icon: ignore,
        item: "Kamera",
      },
      {
        icon: ignore,
        item: "Handphone, bila ingin dibawa bisa memakai waterproof, resiko ditanggung peserta",
      },
      {
        icon: ignore,
        item: "Kunci Kendaraan",
      },
      {
        icon: ignore,
        item: "Barang berharga lainnya",
      },
      {
        icon: ignore,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
  },
  {
    id: "paketC",
    img: paketC,
    packet: "Paket C",
    title: "Sungai Progo Hulu",
    resume:
      "Rafting Sungai Progo Hulu menawarkan petualangan arung jeram luar biasa bagi anda penggemar olahraga air arus deras. Sungai Progo Hulu berlokasi atau terletak di Kab. Temanggung, sungai ini merupakan hulu dari sungai Progo, dan memiliki jeram-jeram kelas III+ – IV. Sangat seru untuk anda yang ingin mencoba sensasi lebih, dengan jeram grade medium.",
    distance: "18 KM",
    distanceIcon: distance,
    duration: "3 jam",
    durationIcon: duration,
    difficulty: "Tingkat Kesulitan III+ – IV",
    difficultyIcon: difficulty,
    appropriate: "Pemula/keluarga/wisata",
    appropriateIcon: appropriate,
    start: "Start Ds. Maron – Temanggung",
    finish: "Finish Ds. Krangan – Temanggung",
    finishIcon: finish,
    price: "Rp. 1.200.000 / Boat",
    content: [
      {
        p: "Anda tentunya tidak ingin melewatkan keseruan dalam menjalani petualangan arung jeram di Sungai Progo Hulu Magelang dengan level jeram kelas Medium yang sangat mengasyikkan untuk pencinta adrenalin. Apabila sebelumnya Anda sudah mencoba Rafting Sungai Elo Magelang atau Arung Jeram Sungai Progo Atas, maka saatnya untuk naik level dan mencari tantangan yang lebih seru lagi. Anda dapat mengeksplorasi sungai terpanjang di Jawa Tengah dan DIY ini yang melintasi beberapa kabupaten seperti Temanggung, Magelang, Sleman, Kulon Progo, dan Bantul. Wisata rafting atau arung jeram bisa menjadi pilihan yang tepat bagi Anda yang sedang berlibur di Jogja atau Magelang, karena selain menawarkan pengalaman yang menyenangkan, juga dapat memberikan sensasi baru yang memacu adrenalin.",
      },
      {
        p: "Salah satu tempat terbaik untuk mencoba arung jeram adalah Sungai Progo Hulu, yang menawarkan petualangan arung jeram luar biasa bagi Anda yang ingin mencoba olahraga air arus deras. Terletak di Kabupaten Temanggung, Sungai Progo Hulu memiliki jeram-jeram kelas III+ hingga IV yang sangat memacu adrenalin, terutama bagi Anda yang ingin mencoba sensasi baru dengan jeram grade medium. Ketika menjalani paket arung jeram sungai Progo Hulu, Anda akan diajak menaklukkan jeram besar sepanjang 18 km dengan perlengkapan arung jeram standard internasional dan dipandu oleh River Guide yang berpengalaman.",
      },
      {
        p: "Tentunya, Anda akan merasa sangat terjamin dengan keamanan yang diberikan dan juga pengalaman yang menyenangkan dalam menjalani petualangan arung jeram di Sungai Progo Hulu. Selain itu, Anda juga akan dapat menikmati keindahan alam sekitarnya yang sangat menakjubkan selama perjalanan arung jeram. Dengan begitu, liburan Anda di Jogja atau Magelang akan menjadi lebih berkesan dan tak terlupakan setelah mencoba wisata arung jeram di Sungai Progo Hulu.",
      },
    ],
    includes: [
      {
        icon: check,
        item: "Peralatan Pengarungan ( Pelampung, Dayung, Helm, Perahu ",
      },
      {
        icon: check,
        item: "Pemandu / River Guide",
      },
      {
        icon: check,
        item: "Makan Prasmanan",
      },
      {
        icon: check,
        item: "Snack Tradisional",
      },
      {
        icon: check,
        item: "Kelapa Muda",
      },
      {
        icon: check,
        item: "Lokal Transport ( Basecamp - Start & Finish )",
      },
      {
        icon: check,
        item: "Retribusi Setempat",
      },
      {
        icon: check,
        item: "P3K Emergency",
      },
      {
        icon: check,
        item: "Asuransi",
      },
      {
        icon: check,
        item: "Basecamp Transit Nyaman ( Kamar Mandi Banyak, Mushola Luas, Gazebo, Ruang Makan Joglo, Parkir Luas)",
      },
      {
        icon: check,
        item: "Parkir Gratis",
      },
    ],
    excludes: [
      {
        icon: ignore,
        item: "Transport menuju Basecamp Kami",
      },
      {
        icon: ignore,
        item: "Biaya Dokumentasi Kegiatan",
      },
      {
        icon: ignore,
        item: "Pengeluaran Pribadi",
      },
    ],
    schedule:
      "Jadwal Pengarungan Rafting Sungai Elo dibagi menjadi 2, yaitu jam berangkat pagi dan jam berangkat siang sebagai berikut:",
    morningSchedule: [
      {
        icon: time,
        time: "08.00",
      },
      {
        icon: time,
        time: "09.00",
      },
      {
        icon: time,
        time: "10.00",
      },
    ],
    afternoonSchedule: [
      {
        icon: time,
        time: "13.00",
      },
      {
        icon: time,
        time: "14.00",
      },
      {
        icon: time,
        time: "15.00",
      },
    ],
    timeTable: [
      {
        time: "08.30 – 08.40",
        activity: "Kedatangan",
      },
      {
        time: "08.40 – 08.50",
        activity: "Persiapan pengarungan",
      },
      {
        time: "08.50 – 09.00",
        activity: "Perjalanan menuju starting point pengarungan",
      },
      {
        time: "09.00 – 09.10",
        activity: "Safety briefing",
      },
      {
        time: "09.10 – 10.00",
        activity: "Pengarungan sungai elo",
      },
      {
        time: "10.00 – 10.15",
        activity: "Rest area sungai menikmati snack & kelapa muda",
      },
      {
        time: "10.15 – 11.45",
        activity: "Melanjutkan pengarungan",
      },
      {
        time: "11.45 – 12.00",
        activity: "Finish, kembali menuju basecamp",
      },
      {
        time: "12.00 – 13.00",
        activity: "Mandi, bilas, ibadah dan makan siang",
      },
      {
        time: "13.00",
        activity: "Selesai, sampai jumpa kembali",
      },
    ],
    equipment:
      "Demi kenyamanan anda saat berkegiatan, kami menyarankan beberapa perlengkapan yang perlu anda persiapkan saat Rafting Sungai Elo.",
    bringIcon: check,
    avoidIcon: ignore,
    brings: [
      {
        icon: check,
        item: "Pakaian yang Nyaman Untuk Kegiatan Outdoor",
      },
      {
        icon: check,
        item: "Pakaian Ganti",
      },
      {
        icon: check,
        item: "Handuk",
      },
      {
        icon: check,
        item: "Peralatan Mandi",
      },
      {
        icon: check,
        item: "Sandal Gunung ( Jika Ada )",
      },
      {
        icon: check,
        item: "Tali Kacamata ( Bila memakai Kacamata )",
      },
      {
        icon: check,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
    avoids: [
      {
        icon: ignore,
        item: "Perhiasan",
      },
      {
        icon: ignore,
        item: "Uang & Dompet",
      },
      {
        icon: ignore,
        item: "Kamera",
      },
      {
        icon: ignore,
        item: "Handphone, bila ingin dibawa bisa memakai waterproof, resiko ditanggung peserta",
      },
      {
        icon: ignore,
        item: "Kunci Kendaraan",
      },
      {
        icon: ignore,
        item: "Barang berharga lainnya",
      },
      {
        icon: ignore,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
  },
  {
    id: "paketD",
    img: paketD,
    packet: "Paket D",
    title: "Sungai Progo Bawah",
    resume:
      "Rafting Sungai Progo Bawah adalah pilihan yang tepat bagi para pemacu adrenalin karena tingkat kesulitan dengan jeram-jeram kelas IV – V. Sungai ini berada di sisi barat Yogyakarta Untuk jarak tempuh bila anda dari kota Jogjakarta adalah sekitar 50 menit. Sungai progo Bawah mempunyai jarak 18 kilometer, dengan waktu untuk melakukan wisata arung jeram progo bawah sekitar 3 jam sampai dengan 4 jam.",
    distance: "18 KM",
    distanceIcon: distance,
    duration: "4 jam",
    durationIcon: duration,
    difficulty: "Tingkat Kesulitan IV – V",
    difficultyIcon: difficulty,
    appropriate: "Pemula/keluarga/wisata",
    appropriateIcon: appropriate,
    start: "Start Ds. Klangon – Magelang",
    finish: "Finish Ds. Dekso Kulonprogo",
    finishIcon: finish,
    price: "Rp. 1.700.000 / Boat",
    content: [
      {
        p: "Nikmati petualangan spektakuler dengan menjajal Paket Harga Rafting Sungai Progo Bawah yang terbaik, dengan Grade Arung Jeram Sungai Progo Bawah kelas Extreme atau Expert. Tentunya sangat cocok bagi Anda yang gemar merasakan sensasi adrenalin dan telah mencoba berbagai rute sungai.",
      },
      {
        p: "Sungai Progo Bawah dikenal sebagai salah satu sungai ekstrem se Jawa-Bali dengan grade jeram IV-V yang jarang ditemukan. Ingin mencoba tantangan baru? Sungai ini adalah pilihan tepat. Terletak di sisi barat Yogyakarta, perjalanan sekitar 50 menit dari kota Jogjakarta akan membawa Anda ke Sungai Progo Bawah yang memiliki panjang 18 kilometer.",
      },
      {
        p: "Tidak hanya itu, Sungai Progo Bawah juga merupakan tempat menyatunya beberapa sungai besar dan kecil seperti Sungai Elo dan Sungai Progo Atas. Karena semua aliran sungai menyatu di Sungai Progo Bawah ini, maka debit dan aliran sungai menjadi lebih besar sehingga membuat arung jeram semakin menantang. Sementara itu, pemandangan yang indah dan kondisi setempat yang masih alami akan membuat petualangan Anda semakin seru dan tak terlupakan. ",
      },
      {
        p: "Start point-nya adalah Jembatan Klangon, Desa Klangon Kab. Magelang dan finish point-nya adalah Bendungan Ancol atau Desa Dekso, Kab. Kulon Progo. Sebuah perjalanan yang panjang selama sekitar 3-4 jam dengan kesulitan yang tinggi dan ekstrim, akan menghadirkan pengalaman yang tidak terlupakan bagi para pecinta arung jeram dan petualang sejati.",
      },
      {
        p: "Meskipun arung jeram di sungai ini memiliki tingkat kesulitan yang tinggi dan ekstrim, kami selalu menerapkan standar prosedur demi memberikan pengalaman rafting yang aman dan nyaman bagi pengunjung yang berani mencoba tantangan ini.",
      },
      {
        p: "Jadi tunggu apa lagi? Sungai Progo Bawah sangat cocok untuk para penggemar arung jeram berpengalaman dan para petualang sejati yang mencari pengalaman baru di alam bebas. Jangan lewatkan kesempatan untuk merasakan sensasi adrenalin yang tak terlupakan di Sungai Progo Bawah yang menantang!",
      },
    ],
    includes: [
      {
        icon: check,
        item: "Peralatan Pengarungan ( Pelampung, Dayung, Helm, Perahu ",
      },
      {
        icon: check,
        item: "Pemandu / River Guide",
      },
      {
        icon: check,
        item: "Makan Prasmanan",
      },
      {
        icon: check,
        item: "Snack Tradisional",
      },
      {
        icon: check,
        item: "Kelapa Muda",
      },
      {
        icon: check,
        item: "Lokal Transport ( Basecamp - Start & Finish )",
      },
      {
        icon: check,
        item: "Retribusi Setempat",
      },
      {
        icon: check,
        item: "P3K Emergency",
      },
      {
        icon: check,
        item: "Asuransi",
      },
      {
        icon: check,
        item: "Basecamp Transit Nyaman ( Kamar Mandi Banyak, Mushola Luas, Gazebo, Ruang Makan Joglo, Parkir Luas)",
      },
      {
        icon: check,
        item: "Parkir Gratis",
      },
    ],
    excludes: [
      {
        icon: ignore,
        item: "Transport menuju Basecamp Kami",
      },
      {
        icon: ignore,
        item: "Biaya Dokumentasi Kegiatan",
      },
      {
        icon: ignore,
        item: "Pengeluaran Pribadi",
      },
    ],
    schedule:
      "Jadwal Pengarungan Rafting Sungai Elo dibagi menjadi 2, yaitu jam berangkat pagi dan jam berangkat siang sebagai berikut:",
    morningSchedule: [
      {
        icon: time,
        time: "08.00",
      },
      {
        icon: time,
        time: "09.00",
      },
      {
        icon: time,
        time: "10.00",
      },
    ],
    afternoonSchedule: [
      {
        icon: time,
        time: "13.00",
      },
      {
        icon: time,
        time: "14.00",
      },
      {
        icon: time,
        time: "15.00",
      },
    ],
    timeTable: [
      {
        time: "08.30 – 08.40",
        activity: "Kedatangan",
      },
      {
        time: "08.40 – 08.50",
        activity: "Persiapan pengarungan",
      },
      {
        time: "08.50 – 09.00",
        activity: "Perjalanan menuju starting point pengarungan",
      },
      {
        time: "09.00 – 09.10",
        activity: "Safety briefing",
      },
      {
        time: "09.10 – 10.00",
        activity: "Pengarungan sungai elo",
      },
      {
        time: "10.00 – 10.15",
        activity: "Rest area sungai menikmati snack & kelapa muda",
      },
      {
        time: "10.15 – 11.45",
        activity: "Melanjutkan pengarungan",
      },
      {
        time: "11.45 – 12.00",
        activity: "Finish, kembali menuju basecamp",
      },
      {
        time: "12.00 – 13.00",
        activity: "Mandi, bilas, ibadah dan makan siang",
      },
      {
        time: "13.00",
        activity: "Selesai, sampai jumpa kembali",
      },
    ],
    equipment:
      "Demi kenyamanan anda saat berkegiatan, kami menyarankan beberapa perlengkapan yang perlu anda persiapkan saat Rafting Sungai Elo.",
    bringIcon: check,
    avoidIcon: ignore,
    brings: [
      {
        icon: check,
        item: "Pakaian yang Nyaman Untuk Kegiatan Outdoor",
      },
      {
        icon: check,
        item: "Pakaian Ganti",
      },
      {
        icon: check,
        item: "Handuk",
      },
      {
        icon: check,
        item: "Peralatan Mandi",
      },
      {
        icon: check,
        item: "Sandal Gunung ( Jika Ada )",
      },
      {
        icon: check,
        item: "Tali Kacamata ( Bila memakai Kacamata )",
      },
      {
        icon: check,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
    avoids: [
      {
        icon: ignore,
        item: "Perhiasan",
      },
      {
        icon: ignore,
        item: "Uang & Dompet",
      },
      {
        icon: ignore,
        item: "Kamera",
      },
      {
        icon: ignore,
        item: "Handphone, bila ingin dibawa bisa memakai waterproof, resiko ditanggung peserta",
      },
      {
        icon: ignore,
        item: "Kunci Kendaraan",
      },
      {
        icon: ignore,
        item: "Barang berharga lainnya",
      },
      {
        icon: ignore,
        item: "Obat-obatan yang bersifat Pribadi",
      },
    ],
  },
];
