/** Partner logos live in public/partners/ — add images there and list filenames below */
const logoFile = (filename: string) =>
  `/partners/${filename.split('/').map(encodeURIComponent).join('/')}`;

const toAlt = (filename: string) =>
  filename
    .replace(/\.[^.]+$/, '')
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() || 'Partner logo';

const filenames = [
  'BRICS IN.png',
  'GEXA Group of Companies .png',
  'Hibret-Web.jpg',
  'images.png',
  'IMG_6857.JPG',
  'IMG_6858.JPG',
  'IMG_6859.JPG',
  'IMG_6860.PNG',
  'IMG_6861.JPG',
  'IMG_6862.PNG',
  'IMG_6864.PNG',
  'IMG_6866.PNG',
  'IMG_6867.PNG',
  'IMG_6869.JPG',
  'IMG_6871.PNG',
  'IMG_6872.PNG',
  'IMG_6875.JPG',
  'IMG_6876.JPG',
  'IMG_6877.JPG',
] as const;

export const partnerLogos = filenames.map((filename) => ({
  src: logoFile(filename),
  alt: toAlt(filename),
}));
