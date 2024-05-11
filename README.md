# Тестовое задание для ЭР-Телеком

> [!NOTE]
> ### Задача:
> Магазину требуется страница отображения товаров.
> 
> Сделать компонент, содержащий в себе серию карточек товаров (произвольное количество, больше десяти, например). В карточке должен присутствовать заголовок, субзаголовок, цена, картинка, описание и кнопка заказа. Лейаут и дизайн карточки не принципиальны, можно взять пример стандартной карточки из гайдлайнов материал дизайна.
>
> - Количество карточек в горизонтальной очереди, их переносы, размеры элементов и шрифта должны подстраиваться под ширину окна (адаптивно). Наполнение карточек получать с удаленного хоста или его имитации. Можно использовать любой бесплатный сервис фейковых апи, подключить свой если есть или поискать на докерхабе, например.
> 
> - При нажатии на кнопку заказа имитировать запрос на бекенд (две секунды "загрузки"), в течении которого блокировать элементы управления других карточек товаров. После этого блокировать кнопку заказа нажатого товара и отмечать его как "заказанный"
>
> - Случайным образом, при загрузке страницы, одну из карточек помечать как товар по акции. Покрасить в специальный цвет, обвести рамочкой и добавить текст о том, что товар по скидке. При нажатии на кнопку заказа такой карточки - выводить попап: "Поздравляем, на этот заказ распространяется скидка".
>
> - Случайным образом, при загрузке страницы, помечать одну из карточек, но не ту, что помечена скидкой, как закончившийся товар. Визуально никак это не показывать. При клике на кнопке заказа такой карточки выводить попап с сообщением о том, что товар закончился и удалять карточку с товаром из списка.
>
> - Процессы связанные, с загрузкой информации (получение списка товаров или заказ) сопровождать наглядным изменением интерфейса: анимацией или сменой стилей.
>
> Язык: js + ts
>
> Фреймворк: React версии ^16
>
> Доп библиотеки: можно использовать Axios, styled-components

---

### Для запуска билда:
```
npm install -g serve
serve -s build
```

---


> [!IMPORTANT]  
> ### Создано с **Create React App**:
>
> `npm start`
> 
> Runs the app in the development mode.\
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
> 
> The page will reload if you make edits.\
> You will also see any lint errors in the console.
> 
> `npm test`
> 
> Launches the test runner in the interactive watch mode.\
> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
> 
> `npm run build`
> 
> Builds the app for production to the `build` folder.\
> It correctly bundles React in production mode and optimizes the build for the best performance.
> 
> The build is minified and the filenames include the hashes.\
> Your app is ready to be deployed!
> 
> See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
> 
> `npm run eject`
> 
> **Note: this is a one-way operation. Once you `eject`, you can’t go back!**