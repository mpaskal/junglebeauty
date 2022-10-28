export function GetCatURL(cat) {
    const { name, type, date } = cat;
    var identifier;
  
    if (type == 'kitten') {
      identifier = date + '-' + name + '-collar';
    } else {
      identifier = type + '-' + name;
    }
  
    return identifier;
  }

export function GetCatFilepath(cat) {
  const { name, type, date } = cat;
  var filepath = `/assets/${type}s`;

  if (type === 'kitten') {
    filepath += `/${date}`;
  }
  filepath += `/${name}/0.png`;

  return filepath;
}

export function GetAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}