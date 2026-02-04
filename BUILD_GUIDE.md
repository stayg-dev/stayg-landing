# StayG 랜딩페이지 빌드 가이드

## 1. Node.js 설치

Node.js 18.17 이상 필요

- **공통**: https://nodejs.org/ 에서 LTS 버전 다운로드 후 설치 → 설치만 하면 아래 명령어 불필요 → 바로 2. 빌드로 진행해주세요.

```bash
# macOS (Homebrew 있을 때)
brew install node

# Windows (winget 있을 때)
winget install OpenJS.NodeJS.LTS

# Linux (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## 2. 빌드

```bash
cd stayg-landing
npm install
npm run build
```

## 3. 빌드 결과 확인 

```bash
npm run start
```

## 4. 문제 발생 시

```bash
rm -rf node_modules package-lock.json .next
npm install
npm run build
```
