// Inisialisasi library Discord RPC
const DiscordRPC = require('discord-rpc');

// Menginisialisasi Discord RPC
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

// Menyiapkan client ID aplikasi Anda
const clientId = '1017946448207298630';

// Mengatur tampilan status (presence)
const presence = {
  details: '#1 GTPS FOR FUN!',
  state: 'Easy BGL, Easy Item, Easy Gems.',
  largeImageKey: 'indps123', // Ganti dengan kunci gambar Anda
  largeImageText: 'INDOPRIDE.PS',
  smallImageKey: 'indps123', // Ganti dengan kunci gambar Anda
  smallImageText: '#1 GTPS FUN!',
  buttons: [
    { label: 'PLAY INDOPRIDE.PS', url: 'https://discord.gg/kota-ps-763320799360450601' },
    { label: 'WEBSITE', url: 'https://idps.vip' }
  ],
  instance: false // Setel menjadi true jika ingin muncul sebagai entri terpisah saat ada beberapa instance game yang sama
};
// Fungsi untuk mengupdate waktu bermain
function updatePlayTime() {
  const currentTime = new Date();
  const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);

  presence.details = '#1 GTPS FOR FUN!';
  presence.state = `Online ${Math.floor(elapsedSeconds / 60)} minutes!`;

  rpc.setActivity(presence);
}

const greenText = '\x1b[32m'; // ANSI escape code for green text
const resetText = '\x1b[0m';  // ANSI escape code to reset text color

// Waktu mulai bermain
const startTime = new Date();

rpc.on('ready', () => {
  // Setelah terhubung, perbarui tampilan status
  rpc.setActivity(presence);

  // Tampilkan pesan konsol dengan warna hijau
  console.log(greenText + 'Discord RPC script for indopride.ps is now running...');
  console.log('Website: https://idps.vip');
  console.log('by @zakops#0001');
  console.log(`
██ ███    ██ ██████  ██████  ███████ 
██ ████   ██ ██   ██ ██   ██ ██     
██ ██ ██  ██ ██   ██ ██████  ███████ 
██ ██  ██ ██ ██   ██ ██           ██ 
██ ██   ████ ██████  ██      ███████ 
                                     
                                      ` + resetText);
  console.log(greenText + 'RPC ACTIVE NOW!' + resetText);

  updatePlayTime(); // Memanggil updatePlayTime saat pertama kali terhubung juga
});

// Memanggil fungsi updatePlayTime setiap 60 detik (1 menit)
setInterval(updatePlayTime, 60000);

// Login ke Discord
rpc.login({ clientId }).catch(console.error);
