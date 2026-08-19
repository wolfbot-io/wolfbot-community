---
title: "WolfBot Community एरर कोड — क्विक फिक्स संदर्भ"
description: "हर WolfBot Community एरर कोड समझाया गया: WB-WIN-001 से WB-WIN-004 और WB-LNX-001 से WB-LNX-002 तक। अपने इंस्टॉलर या स्टार्टअप एरर का सटीक समाधान पाएं।"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-18"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "beginner"
estimated_time: "3 minutes"
related_guides: ["/docs/troubleshooting", "/install/windows", "/install/linux", "/docs/updates"]
keywords: [
  "wolfbot एरर कोड",
  "WB-WIN-001",
  "WB-LNX-002",
  "wolfbot इंस्टॉलर एरर",
  "wolfbot लिनक्स एरर",
  "wolfbot विंडोज़ एरर कोड"
]
sitemap_priority: 0.80
lang: "hi"
translation_of: "docs/error-codes"
---

# WolfBot Community एरर कोड

**टेस्ट किया गया संस्करण: WolfBot Community v0.1.0-p12-ghcr-rc19** · आखिरी अपडेट: 2026-08-18

एक कोड, एक समाधान। एरर कोड आपको ठीक-ठीक बताते हैं कि क्या फेल हुआ, ताकि आपको अंदाज़ा न लगाना पड़े। नीचे अपना कोड ढूंढें, उसका समाधान लागू करें, और अगर समस्या बनी रहे तो [पूरी समस्या निवारण गाइड](/docs/troubleshooting) के साथ आगे बढ़ें।

---

## क्विक लुकअप टेबल

| एरर कोड | यह कहां होता है | एक-लाइन समाधान |
|---|:---:|---|
| [WB-WIN-001](#wb-win-001--अपर्याप्त-डिस्क-स्पेस) | Windows इंस्टॉलर | 2 GB डिस्क स्पेस खाली करें |
| [WB-WIN-002](#wb-win-002--अनुमति-अस्वीकृत) | Windows इंस्टॉलर | इंस्टॉलर को Administrator के रूप में चलाएं |
| [WB-WIN-003](#wb-win-003--करप्ट-डाउनलोड) | Windows इंस्टॉलर | दोबारा डाउनलोड करें और SHA256 चेकसम वेरीफ़ाई करें |
| [WB-WIN-004](#wb-win-004--गायब-डिपेंडेंसीज़) | Windows पहला लॉन्च | Visual C++ Redistributable इंस्टॉल करें |
| [WB-LNX-001](#wb-lnx-001--docker-नहीं-मिला) | Linux इंस्टॉलर | Docker इंस्टॉल करें, या इंस्टॉलर दोबारा चलाएं |
| [WB-LNX-002](#wb-lnx-002--पोर्ट-कॉन्फ़्लिक्ट) | Linux पहला लॉन्च | जो भी पोर्ट 8765 इस्तेमाल कर रहा है उसे रोकें |

---

## Windows एरर कोड

### WB-WIN-001 — अपर्याप्त डिस्क स्पेस
**लक्षण:** इंस्टॉलर "Not enough disk space" के साथ फेल हो जाता है।

**समाधान:** कम से कम 2 GB खाली करें, फिर दोबारा कोशिश करें। पहले अपने `C:` ड्राइव का खाली स्पेस जांचें।

### WB-WIN-002 — अनुमति अस्वीकृत
**लक्षण:** इंस्टॉलेशन के दौरान "Access denied"।

**समाधान:** इंस्टॉलर पर राइट-क्लिक करें और **Run as Administrator** चुनें।

### WB-WIN-003 — करप्ट डाउनलोड
**लक्षण:** इंस्टॉलर शुरू नहीं होता, या इंटीग्रिटी चेक फेल हो जाता है।

**समाधान:** [community.wolfbot.io/download](https://community.wolfbot.io/download) से दोबारा डाउनलोड करें, फिर इसे चलाने से पहले SHA256 चेकसम को आधिकारिक वैल्यू से मिलाकर वेरीफ़ाई करें। देखें [डाउनलोड किए गए ट्रेडिंग बॉट को कैसे वेरीफ़ाई करें](/docs/how-to-verify-a-downloaded-trading-bot)।

### WB-WIN-004 — गायब डिपेंडेंसीज़
**लक्षण:** WolfBot शुरू होते समय "VCRUNTIME140.dll not found"।

**समाधान:** [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) इंस्टॉल करें, फिर WolfBot दोबारा शुरू करें।

---

## Linux एरर कोड

### WB-LNX-001 — Docker नहीं मिला
**लक्षण:** "Docker is not installed"।

**समाधान:** `sudo apt-get install docker.io`, या बस इंस्टॉलर दोबारा चलाएं — यह आपके लिए अपने आप Docker इंस्टॉल और चालू कर देता है।

### WB-LNX-002 — पोर्ट कॉन्फ़्लिक्ट
**लक्षण:** "Port 8765 already in use"।

**समाधान:** `sudo lsof -i :8765` से पता करें कि पोर्ट किसके पास है, उस सर्विस को रोकें, फिर WolfBot दोबारा शुरू करें।

---

## संबंधित

- [पूरी समस्या निवारण गाइड](/docs/troubleshooting) — नेटवर्क, अपडेट, परफ़ॉर्मेंस और डेटा से जुड़ी समस्याएं।
- [Windows पर WolfBot इंस्टॉल करें](/install/windows) — सटीक Windows सेटअप जर्नी।
- [Linux पर WolfBot इंस्टॉल करें](/install/linux) — Ubuntu/Debian सेटअप और सर्विस स्टेट।
- [अपडेट और रोलबैक](/docs/updates) — जब कोई अपडेट फेल हो तो क्या करें।
- कोई कोड नहीं मिल रहा? [GitHub Discussions में खोजें](https://github.com/wolfbot-io/wolfbot-community/discussions) या [एक इशू खोलें](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose)।
