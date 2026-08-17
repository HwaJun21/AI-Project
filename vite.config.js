import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포 시 저장소 이름에 맞춰 base 경로를 수정하세요.
// 예: 저장소가 https://github.com/USER/AI-Project 라면 base: '/AI-Project/'
export default defineConfig({
  plugins: [react()],
  base: './',
})
