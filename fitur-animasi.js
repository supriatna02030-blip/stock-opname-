function animasiMinus(row){
  if(!row) return;
  row.classList.add('anim-minus');
  setTimeout(()=> row.classList.remove('anim-minus'), 800);
}
function animasiPlus(row){
  if(!row) return;
  row.classList.add('anim-plus');
  setTimeout(()=> row.classList.remove('anim-plus'), 800);
}
function toastAnim(pesan){
  const toast = document.createElement('div');
  toast.className = 'toast-anim';
  toast.textContent = pesan;
  document.body.appendChild(toast);
  setTimeout(()=> toast.remove(), 2500);
}
function gantiHalamanAnim(namaHalaman){
  const halaman = document.getElementById(namaHalaman);
  if(!halaman) return;
  document.querySelectorAll('.page').forEach(p => {
    if(p.style.display !== 'none'){ p.style.animation = 'slideOut 0.3s forwards'; }
  });
  setTimeout(()=>{
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    halaman.style.display = 'block';
    halaman.style.animation = 'slideIn 0.3s forwards';
  }, 300);
}
