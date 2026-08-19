---
title: "WolfBot Community अपडेट गाइड — ऑटो-अपडेट और चैनल"
description: "WolfBot Community अपडेट कैसे काम करते हैं। Stable, Beta, और Dev Preview चैनल। अपने यूनिफ़ाइड प्लेटफ़ॉर्म को अप-टू-डेट रखें।"
tested_version: "0.1.0-p12-ghcr-rc19"
last_updated: "2026-08-15"
platforms: ["windows", "linux"]
category: "updates"
difficulty: "beginner"
estimated_time: "5 minutes"
next_guide: "/docs/backup"
related_guides: ["/docs/backup", "/releases/channels", "/docs/troubleshooting"]
keywords: ["wolfbot अपडेट", "wolfbot ऑटो अपडेट", "wolfbot रिलीज़ चैनल", "ट्रेडिंग बॉट अपडेट", "wolfbot अपडेट चैनल"]
sitemap_priority: 0.80
lang: "hi"
translation_of: "docs/updates"
---

# WolfBot Community अपडेट करें

**टेस्ट किया गया संस्करण: WolfBot Community v0.1.0-p12-ghcr-rc19** · आखिरी अपडेट: 2026-08-15

## अपडेट कैसे काम करते हैं

WolfBot Community चैनल पर शिप होता है — आप जो रिलीज़ डाउनलोड करते हैं वही तय करता है कि आपका बिल्ड कितना ताज़ा (और कितना टेस्ट किया गया) है।

| चैनल | विवरण | अपडेट फ़्रीक्वेंसी | जोखिम स्तर |
|---|---|---|---|
| **Stable** | प्रोडक्शन-रेडी | मासिक माइलस्टोन | सबसे कम |
| **Beta** | व्यापक टेस्टिंग | हर 1–2 हफ्ते | कम |
| **Dev Preview** | नवीनतम फीचर | हफ्ते में कई बार | मध्यम |

देखें [रिलीज़ चैनल समझाए गए →](/releases/channels)

---

## अपडेट करना

### Windows

1. [community.wolfbot.io/download](https://community.wolfbot.io/download) पर जाएं
2. नवीनतम Setup.exe डाउनलोड करें
3. इंस्टॉलर चलाएं — यह जगह पर अपग्रेड करता है और आपका डेटा, अकाउंट, और सेटिंग्स रखता है

### Linux

हर इंस्टॉल में एक साइन किया हुआ अपडेटर शामिल होता है, जिसे टर्मिनल से चलाया जाता है:

```bash
# जांचें कि फ़िलहाल क्या इंस्टॉल है
/opt/wolfbot/launcher/wolfbot-updater.sh check

# एक खास रिलीज़ लागू करें (मैनिफेस्ट लिंक के लिए community.wolfbot.io/releases देखें)
/opt/wolfbot/launcher/wolfbot-updater.sh apply <release-manifest-url>
```

अपडेटर कुछ भी पुल करने से पहले नई रिलीज़ के हस्ताक्षर को वेरिफ़ाई करता है, और आपके मौजूदा स्टैक को सिर्फ़ नए को स्टेज करने के बाद रोकता है।

> ℹ️ आज कोई इन-ऐप "अपडेट उपलब्ध है" पॉपअप नहीं है — यह देखने के लिए कि फ़िलहाल क्या वर्तमान है, [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) देखें या ऊपर दिया गया चेक कमांड चलाएं।

---

## अपडेट करने से पहले

1. **अपना कॉन्फ़िगरेशन बैकअप करें** — देखें [बैकअप गाइड →](/docs/backup)
2. **रिलीज़ नोट्स पढ़ें** — [community.wolfbot.io/releases](/releases)
3. **ज्ञात समस्याएं जांचें** — हर रिलीज़ में सूचीबद्ध

### क्या सुरक्षित रहता है
- ✅ API कुंजियां और ब्रोकर कनेक्शन
- ✅ स्ट्रेटेजी कॉन्फ़िगरेशन और रिस्क सेटिंग्स
- ✅ ट्रेडिंग हिस्ट्री और बॉट कॉन्फ़िगरेशन

---

## एक चैनल चुनना

कोई इन-ऐप चैनल स्विच नहीं है — आप जो रिलीज़ डाउनलोड करते हैं उसी से एक चैनल चुनते हैं। नए फीचर आज़माना चाहते हों तो डाउनलोड पेज पर Stable लिंक के बजाय सीधे [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) से Beta या Dev Preview बिल्ड लें।

> ⚠️ Dev Preview बिल्ड में अधूरे फीचर हो सकते हैं — Stable से ज़्यादा खुरदुरे किनारों की उम्मीद रखें।

---

## रोलबैक

अगर एक अपडेट समस्या पैदा करता है:

**Linux:**
```bash
/opt/wolfbot/launcher/wolfbot-updater.sh rollback
```
यह पिछली रिलीज़ के मैनिफेस्ट को बहाल करता है और स्टैक को उस पर रीस्टार्ट करता है।

**Windows:** [GitHub Releases](https://github.com/wolfbot-io/wolfbot-community/releases) से पिछले संस्करण का Setup.exe डाउनलोड करें और फिर से इंस्टॉल करें — मौजूदा संस्करण के ऊपर इंस्टॉल करना जगह पर अपग्रेड या डाउनग्रेड करता है, दोनों तरह से।

---

## अपडेट सुरक्षा

- सभी अपडेट क्रिप्टोग्राफ़िक रूप से साइन किए जाते हैं
- WolfBot लागू करने से पहले हस्ताक्षर वेरिफ़ाई करता है
- मैनुअल वेरिफ़िकेशन के लिए चेकसम पब्लिश किए जाते हैं

---

## आम समस्याएं

| समस्या | समाधान |
|---|---|
| "Update check failed" | इंटरनेट कनेक्शन जांचें |
| "Signature verification failed" | वेबसाइट से मैनुअली डाउनलोड करें |
| अपडेट बीच में अटक गया | अपडेटर कमांड फिर से चलाएं, या नए डाउनलोड से फिर से इंस्टॉल करें |

---

## अगला कदम

> **[बैकअप और रीस्टोर गाइड →](/docs/backup)**
