/**
 * ==========================================================
 * SOOP Camera
 * Version : 1.0
 * Configuration
 * ==========================================================
 */

const CONFIG = {

    /* -----------------------------
       이미지
    ------------------------------ */

    IMAGE: {
        MAIN: "assets/images/photo.jpg",
        THUMBNAIL: "assets/images/photo.jpg"
    },

    /* -----------------------------
       사운드
    ------------------------------ */

    SOUND: {
        SHUTTER: "assets/sounds/shutter.mp3"
    },

    /* -----------------------------
       효과
    ------------------------------ */

    EFFECT: {

        // 초기 Blur(px)
        blur: 6,

        // 확대 배율
        zoom: 1.08,

        // 플래시 지속(ms)
        flashDuration: 120,

        // Focus 시간(ms)
        focusDuration: 500,

        // Zoom 시간(ms)
        zoomDuration: 700,

        // Blur 제거 시간(ms)
        blurDuration: 700

    },

    /* -----------------------------
       UI
    ------------------------------ */

    UI: {

        showGrid: true,

        showHeader: true,

        showThumbnail: false,

        enableSaveButton: false,

        enableRetryButton: false

    },

    /* -----------------------------
       Animation
    ------------------------------ */

    ANIMATION: {

        easing: "ease",

        duration: 600

    }

};
