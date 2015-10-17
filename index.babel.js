import path from 'path'

export default (dir = '', level = 1) => {
  return path.join(__dirname, '../'.repeat(level + 1), dir)
}
