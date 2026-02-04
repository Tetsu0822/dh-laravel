# XOOPS ➜ Laravel 專案摘要

本專案為 XOOPS 移轉至 Laravel 的現代化全端應用，後端採用 Laravel 12，前端以 React + Vite 為主，並整合 Bootstrap 5 及 Tailwind CSS，提供現代化開發體驗與 UI。

---

## 技術棧

- **後端框架**：Laravel 12
- **前端框架**：React 18（JSX 語法，Vite 打包）
- **樣式**：Bootstrap 5、Tailwind CSS
- **前後端整合**：Inertia.js
- **認證/授權**：Laravel Breeze（含註冊、登入、密碼重設、Email 驗證等）
- **資料庫**：MySQL、MariaDB、SQLite（可切換，支援多連線）
- **佈署/開發環境**：Docker Compose（MySQL、Redis）、Laravel Sail
- **測試**：PHPUnit
- **API**：RESTful 風格（部分路由可擴充 API）

---

## 主要功能

### 使用者管理

- 註冊、登入、登出
- 密碼重設、確認密碼
- Email 驗證
- 個人資料編輯、密碼變更
- 刪除帳號（需密碼確認）

### XOOPS 使用者同步

- `/xoops-users` 路由（預設註解，可啟用）
- 連接外部 MariaDB，讀取 XOOPS 使用者資料表
- React 前端頁面顯示 XOOPS 使用者清單

### 儀表板與首頁

- `/dashboard`：登入後儀表板
- `/`：歡迎頁，Bootstrap 5 樣式，顯示環境建置成功訊息

### Session、Cache、Queue

- 預設 session、cache、queue 皆採用 database driver
- 支援 Redis、Memcached、DynamoDB 等多種驅動
- 已建置對應 migration

### 郵件、第三方服務

- 支援 Postmark、Resend、SES、Slack 等第三方服務（`config/services.php`）

---

## 路由設計

- **Web 路由**：`routes/web.php`
    - `/`：首頁（React Welcome 頁面）
    - `/dashboard`：儀表板（需登入、驗證）
    - `/profile`：個人資料編輯（GET、PATCH、DELETE）
    - `/xoops-users`：XOOPS 使用者清單（可啟用）
    - 認證相關路由：`routes/auth.php`（Breeze 預設）

- **Console 路由**：`routes/console.php`
    - Artisan 指令自訂

---

## 前端結構

- **React 元件**：`resources/js/Components/`
- **頁面**：`resources/js/Pages/`
- **佈局**：`resources/js/Layouts/`
- **樣式**：`resources/css/app.css`（Tailwind）、Bootstrap 5

---

## 開發與啟動

1. **安裝依賴**
    ```sh
    composer install
    npm install
    ```

2. **環境設定**
    ```sh
    cp .env.example .env
    php artisan key:generate
    ```

3. **資料庫遷移**
    ```sh
    php artisan migrate
    ```

4. **啟動服務**
    ```sh
    npm run dev
    php artisan serve
    ```

5. **Docker/Sail 啟動**
    ```sh
    ./vendor/bin/sail up
    ```

---

## 測試

- 單元與功能測試：`tests/Feature/`、`tests/Unit/`
    ```sh
    php artisan test
    ```

---

## 其他

- **多資料庫連線**：支援 XOOPS 外部資料庫（MariaDB/MySQL），可於 `.env` 設定
- **環境變數**：`.env`、`.env.example`
- **自動化腳本**：`composer.json`、`package.json` 內建 setup、build、test 指令

---

## 參考

- [Laravel 官方文件](https://laravel.com/docs)
- [Inertia.js](https://inertiajs.com/)
- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

MIT License

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. You can also check out [Laravel Learn](https://laravel.com/learn), where you will be guided through building a modern Laravel application.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

- **[Vehikl](https://vehikl.com)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel)**
- **[DevSquad](https://devsquad.com/hire-laravel-developers)**
- **[Redberry](https://redberry.international/laravel-development)**
- **[Active Logic](https://activelogic.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---
