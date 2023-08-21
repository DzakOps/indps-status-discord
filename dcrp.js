const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const clientId = '1017946448207298630';
const presence = {
  details: '#1 GTPS FOR FUN!',
  state: 'Easy BGL, Easy Item, Easy Gems.',
  largeImageKey: 'indps123',
  largeImageText: 'INDOPRIDE.PS',
  smallImageKey: 'indps123',
  smallImageText: '#1 GTPS FUN!',
  buttons: [
    { label: 'PLAY INDOPRIDE.PS', url: 'https://discord.gg/kota-ps-763320799360450601' },
    { label: 'WEBSITE', url: 'https://idps.vip' }
  ],
  instance: false 
};

function updatePlayTime() {
  const currentTime = new Date();
  const elapsedSeconds = Math.floor((currentTime - startTime) / 1000);
  presence.details = '#1 GTPS FOR FUN!';
  presence.state = `Online ${Math.floor(elapsedSeconds / 60)} minutes!`;

  rpc.setActivity(presence);
}

const greenText = '\x1b[32m'; 
const resetText = '\x1b[0m'; 
const startTime = new Date();

rpc.on('ready', () => {
  rpc.setActivity(presence);
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

  updatePlayTime();
});
setInterval(updatePlayTime, 60000);
rpc.login({ clientId }).catch(console.error);
