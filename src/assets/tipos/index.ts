const tipos: { [key: string]: string } = {};

function importAllSprites() {
  const spriteContext = import.meta.glob('./*.png');
  const promises = [];

  for (const key in spriteContext) {
    const spriteName = key.replace('./', '').replace('.png', '');
    const promise = spriteContext[key]().then((module: any) => {
      tipos[spriteName] = module.default;
    });
    promises.push(promise);
  }

  return Promise.all(promises);
}

export default importAllSprites().then(() => tipos);