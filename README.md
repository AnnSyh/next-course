## О чём проект?
- учебный проект по курсу
- NextJS Быстрый Курс - SSR на React JS
- https://www.youtube.com/watch?v=_EOrSmjdOZQ&list=PLl3oaK4Vu0Y-58jbSrBxZtAs3z7fw7b5x&index=12

## Установка и запуск
- npm i - установка зависимостей
- npm run start - запуск сервера
- npm run build - запуск сборки проекта
- npm run dev - запуск проекта

##### Просмотр
[https://next-course-three-sigma.vercel.app/](https://next-course-three-sigma.vercel.app/)

## Функциональность:
- роутинг по стр /, /about, /posts
- /posts - вывод списка постов с [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/posts)
- индикатор загрузки стр;
- pages\_document.tsx - подключение шрифтов здесь(работа в рамках всего приложения )
- pages\_app.tsx - подключение глоб стилей

#Создание API мок сервера [https://github.com/typicode/json-server](https://github.com/typicode/json-server)
- db.json - в корне проекта
- npm run mock - запуск мокового сервера

#Создание API 
- pages\api\echo.tsx - свой api по адресу http://localhost:3000/api/echo
- pages\api\echo\[id].tsx - запрос на динамический адрес например 43  http://localhost:3000/api/echo/43
- 

## SEO:
- components\MainLayout.tsx - файл с общими метатегами(работа в рамках layout-та)
- разные title для разных стр
- стр 404


## Используемые технологии:
- NextJS
- Typescript

## Getting Started


```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
