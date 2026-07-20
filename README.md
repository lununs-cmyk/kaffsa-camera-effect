# SOOP Camera

브라우저에서 실행되는 사진 갤러리형 카메라 연출 프로젝트입니다.

## 기본 구성

- 포토1
- 포토2
- 포토3
- 포토4
- 포토5

초기 선택은 `포토1`입니다.

## 이미지 추가

`index.html`의 `CONFIG.MODES`에서 각 항목의 `images` 배열에 이미지 경로를 추가하세요.

```javascript
{
  id: "photo1",
  name: "포토1",
  text: "포토1",
  images: [
    "assets/images/photo1-01.jpg",
    "https://example.com/photo1-02.jpg"
  ]
}
```

로컬 상대 경로와 외부 이미지 URL을 함께 사용할 수 있습니다.

현재 기본 이미지 주소는 모두 제거되어 있으며 각 배열은 `images: []` 상태입니다.
