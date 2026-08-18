// fitur-animasi.js - Paket Animasi Lengkap SO

// 1. Animasi shake merah pas minus
function animasiMinus(row){
  if(!row) return;
  row.classList.add('anim-minus');
  setTimeout(()=> row.classList.remove('anim-minus'), 800);
}

// 2. Animasi kedip ijo pas plus
function animasiPlus(row){
  if(!row) return;
  row.classList.add('anim-plus');
  setTimeout(()=> row.classList.remove('anim-plus'), 800);
}

// 3. Animasi angka dashboard ngitung dari 0
function animasiAngka(id, akhir){
  const el = document.getElementById(id);
  if(!el) return;
  let mulai = 0;
  const step = akhir / 30; 
  const timer = setInterval(()=>{
    mulai += step;
    if(mulai >= akhir){
      el.textContent = akhir.toLocaleString('id-ID');
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(mulai).toLocaleString('id-ID');
    }
  }, 30);
}

// 4. Animasi toast mantul dari atas
function toastAnim(pesan){
  const toast = document.createElement('div');
  toast.className = 'toast-anim';
  toast.textContent = pesan;
  document.body.appendChild(toast);
  setTimeout(()=> toast.remove(), 2500);
}

// 5. Animasi slide pas ganti halaman/menu
function gantiHalamanAnim(namaHalaman){
  const halaman = document.getElementById(namaHalaman);
  if(!halaman) return;
  
  // sembunyiin semua dulu dengan slide out
  document.querySelectorAll('.page').forEach(p => {
    if(p.style.display !== 'none'){
      p.style.animation = 'slideOut 0.3s forwards';
    }
  });

  setTimeout(()=>{
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    halaman.style.display = 'block';
    halaman.style.animation = 'slideIn 0.3s forwards';
  }, 300);
}
