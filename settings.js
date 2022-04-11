/*
   * Create By Rifky Store.
   * Contact Me on wa.me/6281246783442
   * Follow https://github.com/marsharf
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6281575886399','6281575886399','6281575886399','6281246783442']
global.premium = ['6281246783442']
global.ownername = 'Rifky Store'
global.botname = 'Rifky Store BOT'
global.footer = 'Rifky Store'
global.ig = 'https://instagram.com/marsharifkyfbt'
global.email = 'contactrifky@gmail.com'
global.region = 'Indonesia'
global.sc = 'Null'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.sessionName = 'Rifky Store'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
