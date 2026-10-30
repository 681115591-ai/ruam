function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Pratchawin Tanyong | Social Links')
    .addMetaTag('viewport', 'width-device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// ฟังก์ชันรวมลิงก์ช่องทางต่างๆ
function getProfileData() {
  return {
    name: "Pratchawin Tanyong",
    handle: "@pratchawintanyong1023",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80", // สามารถเปลี่ยน URL รูปโปรไฟล์ได้ที่นี่
    links: [
      {
        title: "Facebook",
        subtitle: "ติดตามข่าวสารและพูดคุยกันทาง Facebook",
        url: "https://www.facebook.com/profile.php?id=61595771788896&locale=th_TH",
        icon: "facebook",
        color: "#1877F2"
      },
      {
        title: "TikTok",
        subtitle: "คลิปวิดีโอสั้นและคอนเทนต์สนุกๆ",
        url: "https://www.tiktok.com/@pp390150?is_from_webapp=1&sender_device=pc",
        icon: "tiktok",
        color: "#EE1D52"
      },
      {
        title: "YouTube",
        subtitle: "รับชมวิดีโอตัวเต็มและ Subscribe ช่อง",
        url: "https://www.youtube.com/@pratchawintanyong1023",
        icon: "youtube",
        color: "#FF0000"
      }
    ]
  };
}
