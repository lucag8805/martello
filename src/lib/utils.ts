const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/martello' : '';

export function getImagePath(src: string): string {
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  return `${basePath}${src}`;
}
