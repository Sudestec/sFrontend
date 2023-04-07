import PocketBase from 'pocketbase';

const pb = new PocketBase('http://192.168.1.141:7790');

console.log('start');

async function getLoginToken(userName, password) {
    return pb.admins.authWithPassword(userName, password);
}

console.log('before await');

const authToken = getLoginToken('facu.vdp@gmail.com', 'facU1234@$');

authToken
    .then(auth => console.log(auth.token));
console.log('1');

console.log('2');
