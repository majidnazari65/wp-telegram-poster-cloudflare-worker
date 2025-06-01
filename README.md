# WP Telegram Poster Cloudflare Worker

A Cloudflare Worker script to connect WordPress to Telegram, enabling the WP Telegram Poster plugin to send posts to a Telegram channel or group. This Worker acts as a proxy to bypass Telegram restrictions without requiring an external server.

## Features

- Receives post data (title, excerpt, link, featured image, hashtags) from the WP Telegram Poster plugin.
- Sends posts to Telegram using the Telegram Bot API.
- Supports Unicode hashtags (e.g., Persian) with escaped Markdown characters.
- Secure authentication using a secret key.
- Free to use with Cloudflare’s Worker platform.
- Handles both text and photo messages (with featured images).

## Prerequisites

- A Cloudflare account (free tier is sufficient).
- A Telegram bot token (obtained from BotFather).
- The [WP Telegram Poster plugin](https://github.com/majidnazari65/wp-telegram-poster) installed and configured in WordPress.
- Basic knowledge of Cloudflare Workers and GitHub.

## Installation

1. **Clone or Download the Repository**:

   - Clone this repository: `git clone https://github.com/yourusername/wp-telegram-poster-cloudflare-worker.git`.
   - Or [download the ZIP file](https://github.com/majidnazari65/wp-telegram-poster-cloudflare-worker/archive/refs/heads/main.zip) and extract it.

2. **Create a Cloudflare Worker**:

   - Log in to your Cloudflare dashboard.
   - Go to **Workers &gt; Overview** and click **Create a Service**.
   - Name your Worker (e.g., `wp-telegram-poster`) and select **HTTP Handler**.

3. **Deploy the Worker Script**:

   - Copy the contents of `worker.js` from this repository.
   - Paste it into the Cloudflare Worker editor.
   - Click **Save and Deploy**.

## Configuration

1. **Set Environment Variables**:

   - In the Cloudflare Worker dashboard, go to **Settings &gt; Variables**.
   - Add the following environment variables:
     - **SECRET**: A secure key (must match the secret key in the WP Telegram Poster plugin settings).
     - **BOT_TOKEN**: Your Telegram bot token (e.g., `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`).
   - Save the variables.

2. **Get the Worker URL**:

   - After deploying, note the Worker URL (e.g., `https://wp-telegram-poster.your-subdomain.workers.dev`).
   - Enter this URL in the WP Telegram Poster plugin settings in WordPress.

## Usage

1. Ensure the WP Telegram Poster plugin is installed and configured in WordPress (see plugin repository).
2. When a user clicks the **Send to Telegram** button in WordPress, the plugin sends post data to this Worker.
3. The Worker verifies the secret key, constructs a Telegram message (with title, excerpt, link, hashtags, and optional featured image), and sends it to the specified Telegram Chat ID.
4. Check your Telegram channel or group for the published post.

## Support

- For issues, open a ticket on the GitHub Issues page.
- For professional setup or assistance, contact us at info@aniltarah.com.

---

# WP Telegram Poster Cloudflare Worker (فارسی)

اسکریپت Cloudflare Worker برای اتصال وردپرس به تلگرام، که به افزونه WP Telegram Poster امکان ارسال پست‌ها به کانال یا گروه تلگرام را می‌دهد. این ورکر به عنوان یک پروکسی عمل می‌کند تا بدون نیاز به سرور خارجی، محدودیت‌های تلگرام را دور بزند.

## ویژگی‌ها

- دریافت داده‌های پست (عنوان، خلاصه، لینک، تصویر شاخص، هشتگ‌ها) از افزونه WP Telegram Poster.
- ارسال پست‌ها به تلگرام با استفاده از API ربات تلگرام.
- پشتیبانی از هشتگ‌های یونیکد (مانند فارسی) با فرار کاراکترهای Markdown.
- احراز هویت امن با استفاده از کلید مخفی.
- رایگان با استفاده از پلتفرم ورکر کلادفلیر.
- مدیریت پیام‌های متنی و تصویری (با تصاویر شاخص).

## پیش‌نیازها

- حساب کلادفلیر (نسخه رایگان کافی است).
- توکن ربات تلگرام (از BotFather دریافت کنید).
- افزونه [WP Telegram Poster plugin](https://github.com/majidnazari65/wp-telegram-poster) نصب و پیکربندی‌شده در وردپرس.
- دانش پایه ورکرهای کلادفلیر و گیت‌هاب.

## نصب

1. **کلون یا دانلود مخزن**:

   - این مخزن را کلون کنید: `git clone https://github.com/majidnazari65/wp-telegram-poster-cloudflare-worker.git`.
   - یا [فایل ZIP](https://github.com/majidnazari65/wp-telegram-poster-cloudflare-worker/archive/refs/heads/main.zip) را دانلود کرده و استخراج کنید.

2. **ایجاد ورکر کلادفلیر**:

   - وارد داشبورد کلادفلیر شوید.
   - به **Workers &gt; Overview** بروید و روی **Create a Service** کلیک کنید.
   - نامی برای ورکر انتخاب کنید (مثل `wp-telegram-poster`) و **HTTP Handler** را انتخاب کنید.

3. **دیپلوی اسکریپت ورکر**:

   - محتوای فایل `worker.js` از این مخزن را کپی کنید.
   - آن را در ویرایشگر ورکر کلادفلیر جای‌گذاری کنید.
   - روی **Save and Deploy** کلیک کنید.

## پیکربندی

1. **تنظیم متغیرهای محیطی**:

   - در داشبورد ورکر کلادفلیر، به **Settings &gt; Variables** بروید.
   - متغیرهای زیر را اضافه کنید:
     - **SECRET**: کلید امن (باید با کلید مخفی در تنظیمات افزونه WP Telegram Poster مطابقت داشته باشد).
     - **BOT_TOKEN**: توکن ربات تلگرام (مثال: `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`).
   - متغیرها را ذخیره کنید.

2. **دریافت آدرس ورکر**:

   - پس از دیپلوی، آدرس ورکر را یادداشت کنید (مثال: `https://wp-telegram-poster.your-subdomain.workers.dev`).
   - این آدرس را در تنظیمات افزونه WP Telegram Poster در وردپرس وارد کنید.

## استفاده

1. اطمینان حاصل کنید که افزونه WP Telegram Poster در وردپرس نصب و پیکربندی شده است (به مخزن افزونه مراجعه کنید).
2. وقتی کاربر در وردپرس روی دکمه **ارسال به تلگرام** کلیک می‌کند، افزونه داده‌های پست را به این ورکر ارسال می‌کند.
3. ورکر کلید مخفی را تأیید می‌کند، پیام تلگرامی (با عنوان، خلاصه، لینک، هشتگ‌ها، و تصویر شاخص در صورت وجود) را ساخته و به شناسه چت تلگرام مشخص‌شده ارسال می‌کند.
4. کانال یا گروه تلگرام خود را برای پست منتشرشده بررسی کنید.

## پشتیبانی

- برای مشکلات، در صفحه Issues گیت‌هاب تیکت باز کنید.
- برای راه‌اندازی حرفه‌ای یا کمک، با ما از طریق info@aniltarah.com تماس بگیرید.
