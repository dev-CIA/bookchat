# BOOK CHAT

<div align="center">
   <img width="200px;" src="https://github.com/dev-CIA/bookchat/assets/112180368/da229206-2f84-464f-ac9d-dd4106c78cd7">
   <br />
  
   <h3>ChatGPT 기반 책 토론 및 책 추천 서비스</h3>
   
   <br />

<span style="font-size: 8px; color: #96F2D7;">✷ ✷ ✷</span>

   <br />

책에 대해 **토론**할 사람이 필요할 때, **_북챗!_**

날씨, 기분 등 내 상황에 맞는 책 **추천**받고 싶을때, **_북챗!_**

   <br/>
   <br/>
   
   <a href="https://www.mybookchat.com"><img width="170px;" alt="Static Badge" src="https://img.shields.io/badge/%EB%B0%B0%ED%8F%AC%ED%8E%98%EC%9D%B4%EC%A7%80-BOOK%20CHAT-37B24D"></a>
   
   <a href="https://github.com/dev-CIA/bookchat-server"><img alt="Static Badge" src="https://img.shields.io/badge/repo-BOOK%20CHAT%20Server-blue?logo=github"></a>
</div>

<br />

## 서비스 소개

1. ChatGPT기반의 `BOOK CHAT`과 함께 책에 대해 토론하고, 감상을 나눌 수 있습니다.
2. 내가 읽은 책, 내 기분, 날씨, 분위기 등의 내 상태에 맞는 책 추천받을 수 있습니다.
3. 도서 검색이 가능하며, 내가 읽은 책을 기록할 수 있습니다.

### 기획 배경

영상물이 넘쳐나는 시대지만 여전히 독서는 중요합니다. 그러나 독서 인구 많이 감소하고 있습니다.

언제 어디서나 읽은 책에 대해서 토론할 수 있는 사람이 있다면, 상황에 맞게 음악을 추천받듯 나에게 딱 맞는 책을 추천받을 수 있다면, 더 많은 사람들이 더 즐겁게 독서를 즐기지 않을까하는 생각에서 북챗은 시작되었습니다.

## 프로젝트 개요

1. 기간: 2023.07.22 ~
2. 참여 인원: 1인 (개인 프로젝트)
3. 프로젝트 관리 및 회고: [Github Projects](https://github.com/users/dev-CIA/projects/1), [Github Issues](https://github.com/dev-CIA/bookchat/issues) 사용하여 정리

## 기술 스택

![TypeScript](https://img.shields.io/badge/typescript-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-007af4.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FscXVlXzEiIGRhdGEtbmFtZT0iQ2FscXVlIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NS4yMSA2MjMuOTEiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDp3aGl0ZX08L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Im03NC42MiAyNzcuNDYgMS4yNC0uMTMgMzQuNzgtMy4yOC01My40Ny01OC42NkE5Ni40NyA5Ni40NyAwIDAgMSAzMiAxNTAuM0gzYTEyNS4zIDEyNS4zIDAgMCAwIDMyLjggODQuNTdaTTE3Ny4xMyAzNDdsLTM2IDMuNCA1My4zMiA1OC41MUE5Ni40MSA5Ni40MSAwIDAgMSAyMTkuNjMgNDc0aDI4LjkyYTEyNS4yOCAxMjUuMjggMCAwIDAtMzIuNzYtODQuNTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMjUzLjY5IDIzMS42OGMtNi4zMy0zMS4zLTMwLjg5LTU0LjA5LTYyLjU3LTU4LjA3bC02LjM1LS43OWE0OS42MSA0OS42MSAwIDAgMS00My4zNS00OS4xM3YtMjBhNTIuNzUgNTIuNzUgMCAxIDAtMjguOTEtLjM2djIwLjM4YTc4LjU2IDc4LjU2IDAgMCAwIDY4LjY1IDc3LjgybDYuMzYuOGMyMy4yNCAyLjkyIDM0Ljc4IDIwIDM3LjgzIDM1LjFzLS45MyAzNS4zMi0yMS4yMiA0N2E3My44MSA3My44MSAwIDAgMS0zMC4wNiA5LjYybC05NS42NiA5YTEwMi40NSAxMDIuNDUgMCAwIDAtNDEuOCAxMy4zOEM5IDMzMi40NS00LjgxIDM2MyAxLjUyIDM5NC4yOXMzMC44OSA1NC4wOCA2Mi41NyA1OC4wNmw2LjM1LjhhNDkuNiA0OS42IDAgMCAxIDQzLjM1IDQ5LjEydjE4YTUyLjc1IDUyLjc1IDAgMSAwIDI4LjkxLjI2di0xOC4yNmE3OC41NSA3OC41NSAwIDAgMC02OC42NS03Ny44MWwtNi4zNi0uOGMtMjMuMjQtMi45Mi0zNC43OC0yMC4wNS0zNy44My0zNS4xMXMuOTMtMzUuMzIgMjEuMjItNDdhNzMuNjggNzMuNjggMCAwIDEgMzAuMDYtOS42M2w5NS42Ni05YTEwMi40NSAxMDIuNDUgMCAwIDAgNDEuOC0xMy4zOGMyNy42NS0xNi4wMiA0MS40LTQ2LjU0IDM1LjA5LTc3Ljg2WiIvPjwvc3ZnPg==&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![React Hook Form](https://img.shields.io/badge/zod-3E67B1.svg?style=for-the-badge&logo=zod&logoColor=white)
![MANTINE](https://img.shields.io/badge/mantine-339AF0?style=for-the-badge&logo=mantine&logoColor=white)
![Emotion](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white)

<br />
<br />

---

<div align='center'>
<a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdev-CIA%2Fbookchat&count_bg=%2337B24D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
</div>
