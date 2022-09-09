import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();

const files = getFiles();
const local = files.map((file) => ({ ...file, url: `/noted/${file.url}` }));
console.log('files', files);
console.log('local', local);

const used = files;
setupPrecaching(used);
