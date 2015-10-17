import path from 'path'

export default (dir = '', level = 2) => {
  return path.join(__dirname, '../'.repeat(level), dir)
}
