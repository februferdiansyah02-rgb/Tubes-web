
const menuData = [
 
    { id: 1,  nama: "Nasi Putih",            kategori: "Makanan Pokok", kalori: 180,  harga: 5000,  img: "https://foodish-api.com/images/biryani/biryani1.jpg" },
    { id: 2,  nama: "Nasi Goreng Spesial",   kategori: "Makanan Pokok", kalori: 450,  harga: 18000, img: "https://foodish-api.com/images/biryani/biryani2.jpg" },
    { id: 3,  nama: "Mie Goreng Jawa",       kategori: "Makanan Pokok", kalori: 380,  harga: 16000, img: "https://foodish-api.com/images/biryani/biryani3.jpg" },
    { id: 4,  nama: "Spaghetti Aglio Olio",  kategori: "Makanan Pokok", kalori: 420,  harga: 28000, img: "https://foodish-api.com/images/pasta/pasta1.jpg" },
    { id: 5,  nama: "Kentang Panggang",      kategori: "Makanan Pokok", kalori: 220,  harga: 15000, img: "https://foodish-api.com/images/pasta/pasta2.jpg" },
    { id: 6,  nama: "Roti Gandum (2 lembar)", kategori: "Makanan Pokok", kalori: 160,  harga: 8000,  img: "https://foodish-api.com/images/pasta/pasta3.jpg" },

    // Lauk-Pauk (8 items)
    { id: 7,  nama: "Ayam Goreng Tepung",    kategori: "Lauk-Pauk",     kalori: 300,  harga: 17000, img: "https://foodish-api.com/images/burger/burger1.jpg" },
    { id: 8,  nama: "Ayam Bakar Madu",       kategori: "Lauk-Pauk",     kalori: 280,  harga: 20000, img: "https://foodish-api.com/images/burger/burger2.jpg" },
    { id: 9,  nama: "Rendang Daging Sapi",   kategori: "Lauk-Pauk",     kalori: 380,  harga: 32000, img: "https://foodish-api.com/images/burger/burger3.jpg" },
    { id: 10, nama: "Tempe Orek",            kategori: "Lauk-Pauk",     kalori: 150,  harga: 8000,  img: "https://foodish-api.com/images/dosa/dosa1.jpg" },
    { id: 11, nama: "Tahu Goreng",           kategori: "Lauk-Pauk",     kalori: 120,  harga: 6000,  img: "https://foodish-api.com/images/dosa/dosa2.jpg" },
    { id: 12, nama: "Ikan Nila Bakar",       kategori: "Lauk-Pauk",     kalori: 250,  harga: 22000, img: "https://foodish-api.com/images/samosa/samosa1.jpg" },
    { id: 13, nama: "Telur Dadar",           kategori: "Lauk-Pauk",     kalori: 190,  harga: 7000,  img: "https://foodish-api.com/images/samosa/samosa2.jpg" },
    { id: 14, nama: "Beef Steak Sirloin",    kategori: "Lauk-Pauk",     kalori: 420,  harga: 45000, img: "https://foodish-api.com/images/samosa/samosa3.jpg" },

    // Sayur (5 items)
    { id: 15, nama: "Tumis Kangkung",        kategori: "Sayur",         kalori: 90,   harga: 9000,  img: "https://foodish-api.com/images/dessert/dessert1.jpg" },
    { id: 16, nama: "Sayur Asem",            kategori: "Sayur",         kalori: 70,   harga: 8000,  img: "https://foodish-api.com/images/dessert/dessert2.jpg" },
    { id: 17, nama: "Capcay Kuah",           kategori: "Sayur",         kalori: 110,  harga: 13000, img: "https://foodish-api.com/images/dessert/dessert3.jpg" },
    { id: 18, nama: "Salad Sayur Segar",     kategori: "Sayur",         kalori: 80,   harga: 14000, img: "https://foodish-api.com/images/dessert/dessert4.jpg" },
    { id: 19, nama: "Gado-Gado",             kategori: "Sayur",         kalori: 280,  harga: 16000, img: "https://foodish-api.com/images/dessert/dessert5.jpg" },

    // Buah (4 items)
    { id: 20, nama: "Pisang (1 buah)",       kategori: "Buah",          kalori: 105,  harga: 5000,  img: "https://foodish-api.com/images/biryani/biryani4.jpg" },
    { id: 21, nama: "Apel Fuji (1 buah)",    kategori: "Buah",          kalori: 95,   harga: 7000,  img: "https://foodish-api.com/images/biryani/biryani5.jpg" },
    { id: 22, nama: "Semangka (1 potong)",   kategori: "Buah",          kalori: 60,   harga: 6000,  img: "https://foodish-api.com/images/biryani/biryani6.jpg" },
    { id: 23, nama: "Fruit Salad Cup",       kategori: "Buah",          kalori: 140,  harga: 17000, img: "https://foodish-api.com/images/biryani/biryani7.jpg" },

    // Minuman (3 items)
    { id: 24, nama: "Es Teh Manis",          kategori: "Minuman",       kalori: 90,   harga: 5000,  img: "https://foodish-api.com/images/pasta/pasta4.jpg" },
    { id: 25, nama: "Air Mineral 600ml",     kategori: "Minuman",       kalori: 0,    harga: 4000,  img: "https://foodish-api.com/images/pasta/pasta5.jpg" },
    { id: 26, nama: "Jus Alpukat",           kategori: "Minuman",       kalori: 230,  harga: 18000, img: "https://foodish-api.com/images/pasta/pasta6.jpg" }
];



function formatRupiah(angka) {
    return "Rp " + angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Dapatkan class kategori untuk styling
function getCategoryClass(kategori) {
    const map = {
        "Makanan Pokok": "cat-pokok",
        "Lauk-Pauk":     "cat-lauk",
        "Sayur":         "cat-sayur",
        "Buah":          "cat-buah",
        "Minuman":       "cat-minuman"
    };
    return map[kategori] || "";
}

function getCategoryKey(kategori) {
    const map = {
        "Makanan Pokok": "pokok",
        "Lauk-Pauk":     "lauk",
        "Sayur":         "sayur",
        "Buah":          "buah",
        "Minuman":       "minuman"
    };
    return map[kategori] || "";
}


function generateTable() {
    const tbody = document.getElementById("menuTableBody");

    
    menuData.forEach((menu) => {
  
        const row = document.createElement("tr");
        row.dataset.id = menu.id;

      
        const tdImg = document.createElement("td");
        const imgDiv = document.createElement("div");
        imgDiv.className = "menu-img-cell";
        const img = document.createElement("img");
        img.src = menu.img;
        img.alt = menu.nama;
        img.loading = "lazy";
        imgDiv.appendChild(img);
        tdImg.appendChild(imgDiv);

  
        const tdName = document.createElement("td");
        tdName.className = "menu-name-cell";
   
        const tdCat = document.createElement("td");
        const catSpan = document.createElement("span");
        catSpan.className = "menu-cat-cell " + getCategoryClass(menu.kategori);
        catSpan.textContent = menu.kategori;
        tdCat.appendChild(catSpan);

        const tdCal = document.createElement("td");
        tdCal.className = "menu-cal-cell";
        tdCal.textContent = menu.kalori + " kkal";


        const tdPrice = document.createElement("td");
        tdPrice.className = "menu-price-cell";
        tdPrice.textContent = formatRupiah(menu.harga);

  
        const tdCheck = document.createElement("td");
        tdCheck.style.textAlign = "center";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "menu-checkbox";
        checkbox.dataset.id = menu.id;
        tdCheck.appendChild(checkbox);

        row.appendChild(tdImg);
        row.appendChild(tdName);
        row.appendChild(tdCat);
        row.appendChild(tdCal);
        row.appendChild(tdPrice);
        row.appendChild(tdCheck);

        tbody.appendChild(row);
    });
}


function updateResults() {
    const checkedBoxes = document.querySelectorAll(".menu-checkbox:checked");

    const selectedMenus = [];

    checkedBoxes.forEach((checkbox) => {
        const menuId = parseInt(checkbox.dataset.id);
        const menu = menuData.find((m) => m.id === menuId);
        if (menu) {
            selectedMenus.push(menu);
        }
    });


    const imagesStack = document.getElementById("imagesStack");


    imagesStack.innerHTML = "";

    if (selectedMenus.length === 0) {
        imagesStack.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-utensils"></i>
                <p>Belum ada menu dipilih</p>
                <span>Centang menu dari tabel di samping</span>
            </div>
        `;
    } else {
    
        selectedMenus.forEach((menu) => {
            const imgDiv = document.createElement("div");
            imgDiv.className = "selected-img";
            imgDiv.title = menu.nama;

            const img = document.createElement("img");
            img.src = menu.img;
            img.alt = menu.nama;
            imgDiv.appendChild(img);

            imagesStack.appendChild(imgDiv);
        });
    }

    let totalKalori = 0;
    selectedMenus.forEach((menu) => {
        totalKalori += menu.kalori;
    });
    document.getElementById("totalCalori").textContent = totalKalori + " kkal";


    let totalHarga = 0;
    selectedMenus.forEach((menu) => {
        totalHarga += menu.harga;
    });
    document.getElementById("totalHarga").textContent = formatRupiah(totalHarga);


    const kategoriTerpenuhi = {
        pokok: false,
        lauk: false,
        sayur: false,
        buah: false,
        minuman: false
    };

    selectedMenus.forEach((menu) => {
        const key = getCategoryKey(menu.kategori);
        if (key) {
            kategoriTerpenuhi[key] = true;
        }
    });

    const kategoriList = ["pokok", "lauk", "sayur", "buah", "minuman"];

    kategoriList.forEach((kat) => {
        const checkIcon = document.getElementById("check-" + kat);
        const statusText = document.getElementById("status-" + kat);
        const checkItem = checkIcon.closest(".check-item");

        if (kategoriTerpenuhi[kat]) {
            checkIcon.innerHTML = '<i class="fas fa-check"></i>';
            statusText.textContent = "Terpenuhi";
            checkItem.classList.add("fulfilled");
        } else {
            checkIcon.innerHTML = '<i class="fas fa-circle"></i>';
            statusText.textContent = "Belum";
            checkItem.classList.remove("fulfilled");
        }
    });

    const badge = document.getElementById("balancedBadge");
    const semuaTerpenuhi = kategoriList.every((kat) => kategoriTerpenuhi[kat]);

    if (semuaTerpenuhi) {
        badge.classList.add("show");
    } else {
        badge.classList.remove("show");
    }

    document.querySelectorAll(".menu-table tbody tr").forEach((row) => {
        const checkbox = row.querySelector(".menu-checkbox");
        if (checkbox && checkbox.checked) {
            row.classList.add("selected");
        } else {
            row.classList.remove("selected");
        }
    });
}

function attachEventListeners() {
    const checkboxes = document.querySelectorAll(".menu-checkbox");
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", function() {
            updateResults();
        });
    });
}


function init() {
  
    generateTable();
    attachEventListeners();
    updateResults();
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}