import fs from 'fs'
import path from 'path'

export function saveBase64Image(base64String: string, fileName: string) {
  const publicDir = path.join(process.cwd(), 'public')
  const filePath = path.join(publicDir, fileName)
  
  // Remove the data URL prefix and convert to buffer
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '')
  const buffer = Buffer.from(base64Data, 'base64')
  
  // Write the buffer to file
  fs.writeFileSync(filePath, buffer)
} 