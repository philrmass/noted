import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';

setupRouting();

const files = getFiles();
const local = files.map((file) => ({ ...file, url: `.${file.url}` }));
setupPrecaching(local);
