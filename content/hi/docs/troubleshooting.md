---
title: "WolfBot Community समस्या निवारण — आम समस्याएं और समाधान"
description: "आम WolfBot Community समस्याओं को ठीक करें। इंस्टॉलेशन एरर, मार्केट कनेक्शन समस्याएं, अपडेट फेलियर, और एरर कोड।"
tested_version: "0.1.0-beta.4"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "troubleshooting"
difficulty: "intermediate"
estimated_time: "5 minutes"
related_guides: ["/install/windows", "/install/linux", "/docs/updates", "/brokers/api-key-guide"]
keywords: ["wolfbot समस्या निवारण", "wolfbot एरर कोड", "wolfbot ठीक करें", "wolfbot इंस्टॉलेशन एरर", "wolfbot कनेक्शन समस्या"]
sitemap_priority: 0.80
lang: "hi"
translation_of: "docs/troubleshooting"
---

# समस्या निवारण गाइड

**टेस्ट किया गया संस्करण: WolfBot Community v0.1.0-beta.4** · आखिरी अपडेट: 2026-08-15

## त्वरित डायग्नोस्टिक

अपने WolfBot इंस्टॉल फ़ोल्डर से, एक टर्मिनल (Windows पर Command Prompt/PowerShell, Linux पर एक सामान्य टर्मिनल) से बिल्ट-इन डायग्नोस्टिक टूल चलाएं:

```bash
wolfbot doctor
```

यह रीड-ओनली है — यह बिना कुछ बदले इंस्टॉलेशन इंटेग्रिटी, सर्विस स्टेटस, नेटवर्क, और ब्रोकर कनेक्शन जांचता है।

---

## इंस्टॉलेशन एरर

### WB-WIN-001 — डिस्क स्पेस अपर्याप्त
**लक्षण:** इंस्टॉलर "Not enough disk space" के साथ फेल होता है

**समाधान:** कम से कम 2 GB फ़्री करें। `C:` ड्राइव स्पेस जांचें।

### WB-WIN-002 — अनुमति अस्वीकृत
**लक्षण:** इंस्टॉलेशन के दौरान "Access denied"

**समाधान:** इंस्टॉलर पर राइट-क्लिक करें → **Run as Administrator**

### WB-WIN-003 — करप्ट डाउनलोड
**लक्षण:** इंस्टॉलर शुरू नहीं होता या इंटेग्रिटी चेक फेल हो जाता है

**समाधान:** [community.wolfbot.io/download](https://community.wolfbot.io/download) से फिर से डाउनलोड करें। SHA256 चेकसम वेरिफ़ाई करें।

### WB-WIN-004 — डिपेंडेंसी गायब
**लक्षण:** "VCRUNTIME140.dll not found"

**समाधान:** [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe) इंस्टॉल करें

### WB-LNX-001 — Docker नहीं मिला
**लक्षण:** "Docker is not installed"

**समाधान:** `sudo apt-get install docker.io` या इंस्टॉलर फिर से चलाएं जो इसे अपने आप संभालता है।

### WB-LNX-002 — पोर्ट कॉन्फ़्लिक्ट
**लक्षण:** "Port 8765 already in use"

**समाधान:** `sudo lsof -i :8765` → टकराने वाली सर्विस रोकें → WolfBot रीस्टार्ट करें

---

## कनेक्शन समस्याएं

### ब्रोकर कनेक्शन फेल हुआ
1. पुष्टि करें कि API कुंजी अभी भी वैध है (एक्सपायर नहीं हुई)
2. API अनुमतियां जांचें: Trade ✅, Withdrawal ❌
3. अगर IP-प्रतिबंधित है: पुष्टि करें कि आपका IP मेल खाता है
4. एक्सचेंज API स्टेटस पेज टेस्ट करें
5. MT5 के लिए: पुष्टि करें कि MT5 टर्मिनल चल रहा है और लॉग इन है
6. कुंजी फिर से बनाएं और फिर से जोड़ें

### "Connection Refused"
- इंटरनेट कनेक्शन जांचें
- पुष्टि करें कि एक्सचेंज आपके क्षेत्र में जियो-ब्लॉक नहीं है
- ज़रूरत हो तो VPN के साथ कोशिश करें

### "Rate Limit Exceeded"
WolfBot इसे अपने आप संभालता है। अगर बार-बार हो, तो बॉट फ़्रीक्वेंसी कम करें।

---

## अपडेट समस्याएं

| समस्या | समाधान |
|---|---|
| अपडेट चेक फेल होता है | इंटरनेट जांचें; फ़ायरवॉल अपडेट सर्वर को ब्लॉक कर सकता है |
| हस्ताक्षर वेरिफ़िकेशन फेल होता है | [डाउनलोड पेज](/download) से मैनुअली डाउनलोड करें |
| अपडेट अटक गया | WolfBot रीस्टार्ट करें और फिर से कोशिश करें |
| अपडेट के बाद, WolfBot शुरू नहीं होता | Linux: `wolfbot-updater.sh rollback`. Windows: पिछले संस्करण का Setup.exe फिर से इंस्टॉल करें — देखें [अपडेट गाइड](/docs/updates) |

---

## परफॉरमेंस समस्याएं

### हाई CPU इस्तेमाल
- एक्टिव ट्रेडिंग पेयर की संख्या कम करें
- बॉट इंटरवल बढ़ाएं (जैसे, 5min → 15min)
- बिना इस्तेमाल के Dashboard टैब बंद करें

### हाई मेमोरी इस्तेमाल
- WolfBot रीस्टार्ट करें (7 दिनों से ज़्यादा चलने पर मेमोरी लीक हो सकती है)
- एक साथ चलने वाली स्ट्रेटेजी की संख्या कम करें

### धीमा Dashboard
- एक आधुनिक ब्राउज़र (Chrome, Edge, Firefox) इस्तेमाल करें
- ब्राउज़र कैश साफ़ करें
- Dashboard विजेट कम करें

---

## डेटा और कॉन्फ़िगरेशन

### कॉन्फ़िगरेशन खो गया
1. अगर आपके पास बैकअप आर्काइव है, तो इसे रीस्टोर करें — देखें [बैकअप और रीस्टोर गाइड](/docs/backup)
2. अगर नहीं: मैनुअली फिर से कॉन्फ़िगर करें

### डेटाबेस करप्शन
```bash
wolfbot repair
```
यह एक समर्पित, फेल-क्लोज़्ड रिपेयर कमांड है — यह आपके चलाए बिना कभी अपने आप रिपेयर नहीं करता, और जिस चीज़ के बारे में यह निश्चित नहीं है उसे यह छूता भी नहीं।

---

## लॉग

डिबगिंग के लिए विस्तृत लॉग खोजें:

**Windows:** `C:\Program Files\WolfBot\logs\`

**Linux:** `~/.wolfbot/logs/` या `wolfbot logs`

[GitHub](https://github.com/wolfbot-io/wolfbot-community/issues) पर समस्याएं रिपोर्ट करते समय, संबंधित लॉग अंश जोड़ें (API कुंजियां छुपाएं)।

---

## अभी भी समस्या है?

1. [GitHub Discussions](https://github.com/wolfbot-io/wolfbot-community/discussions) में खोजें
2. [GitHub Issues](https://github.com/wolfbot-io/wolfbot-community/issues) जांचें
3. इसके साथ एक [नया इशू](https://github.com/wolfbot-io/wolfbot-community/issues/new/choose) खोलें:
   - WolfBot संस्करण
   - OS और संस्करण
   - एरर कोड या संदेश
   - दोहराने के चरण

> ⚠️ कभी भी API कुंजियां, सीक्रेट कुंजियां, या पासवर्ड शेयर न करें।
