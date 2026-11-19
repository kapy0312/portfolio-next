// public/ 底下的檔案在 GitHub Pages 上會多一層 /portfolio-next 前綴
export function asset(path) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`
}
