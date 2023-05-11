const sprites: { [key: string]: string } = {};

function importAllSprites() {
  const spriteContext = import.meta.glob('./*.png');
  for (const key in spriteContext) {
    const spriteName = key.replace('./', '').replace('.png', '');
    spriteContext[key]().then((module: any) => {
      sprites[spriteName] = module.default;
    });
  }
}

importAllSprites();

export default sprites;