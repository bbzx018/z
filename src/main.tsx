import  { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'          // หรือ './App.tsx' ถ้าใช้ TypeScript
import './theme.css'             // หรือจะเปลี่ยนเป็น './index.css' ตามไฟล์ที่ต้องการ

const rootEl = document.getElementById('root')!

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// ตั้ง global flag ให้สคริปต์อื่นรู้ว่าแอป mount แล้ว
;(window as any).__APP_MOUNTED__ = true
