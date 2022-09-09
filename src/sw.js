import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();

const files = getFiles();
//const pathed = files.map((file) => ({ ...file, url: `noted/${file.url}` }));
console.log('files', files);
//console.log('pathed', pathed);

const used = files;
setupPrecaching(used);
