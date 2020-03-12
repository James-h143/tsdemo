const decoder = new TextDecoder('utf-8')
const fileContents = decoder.decode(await Deno.readFile('./lib/file.txt'))

export async function topLevelAwait() {
  console.log('fileContents: '+fileContents);
}
