# Umami 분석 사용 가이드

이 프로젝트는 방문자 통계를 위해 **Umami**를 함께 사용합니다. Docker로 Umami를 띄운 뒤, 로그인하고 사이트를 연결하면 대시보드에서 통계를 볼 수 있습니다.

---

## 1. Umami 접속

- **주소**: `http://localhost:3001` (로컬 Docker 기준)  
  실제 서버에 배포한 경우 해당 서버 주소 + 포트(3001)로 접속합니다.
- **첫 로그인**: Umami 공식 이미지 기준 기본 계정은 `admin` / `umami`입니다.  
  비밀번호는 로그인 후 **Settings → Profile**에서 변경할 수 있습니다.

---

## 2. 사이트(도메인) 연결

1. 로그인 후 **Settings**(⚙️) → **Websites**로 이동합니다.
2. **Add website**를 클릭합니다.
3. **Name**: 사이트 이름(예: StayG 랜딩), **Domain**: 실제 도메인(예: `stayg.co.kr`) 또는 로컬 테스트 시 `localhost`를 입력합니다.
4. 저장하면 **Website ID**가 생성됩니다. 이 값을 복사합니다.

---

## 3. 프로젝트에 ID 적용

`.env` 파일에 아래 값을 넣습니다.

```env
NEXT_PUBLIC_UMAMI_SCRIPT_URL=http://localhost:3001/script.js
NEXT_PUBLIC_UMAMI_WEBSITE_ID=복사한_Website_ID
```

- 배포 환경에서는 `NEXT_PUBLIC_UMAMI_SCRIPT_URL`을 실제 Umami 서버 주소로 바꿉니다.  
  예: `https://analytics.도메인.com/script.js`

---

## 4. 통계 확인

설정이 끝나면 랜딩 페이지에 방문할 때마다 Umami로 데이터가 전송됩니다.  
Umami 대시보드 **Dashboard**에서 방문자 수, 페이지뷰, 유입 경로 등 통계를 확인할 수 있습니다. 데이터가 쌓이기까지 수 분 정도 걸릴 수 있습니다.

---

## 요약

| 단계 | 내용 |
|------|------|
| 1 | Umami 대시보드 접속 후 로그인 |
| 2 | **Settings → Websites**에서 사이트 추가 후 **Website ID** 복사 |
| 3 | `.env`에 `NEXT_PUBLIC_UMAMI_WEBSITE_ID` 등 설정 |
| 4 | 랜딩 접속 후 대시보드에서 통계 확인 |
