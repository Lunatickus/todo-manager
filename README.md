## Рекурсивный ToDo List

Этот проект представляет собой простое веб-приложение для управления списком задач. Пользователь может добавлять, редактировать, удалять и отмечать задачи как выполненные. Каждая задача может содержать подзадачи, которые также могут иметь свои подзадачи, образуя древовидную структуру задач.

### Функциональность

1. **Добавление задачи:**
   - Пользователь вводит название задачи.
   - Если задача имеет подзадачи, для каждой подзадачи рекурсивно вызывается функция добавления задачи.
   - Добавленная задача отображается в списке задач.

2. **Редактирование задачи:**
   - Пользователь выбирает задачу, которую хочет отредактировать.
   - Пользователь вводит новое название и описание задачи.
   - Если задача имеет подзадачи, для каждой подзадачи рекурсивно вызывается функция редактирования задачи.
   - Обновленная задача отображается в списке задач.

3. **Удаление задачи:**
   - Пользователь выбирает задачу, которую хочет удалить.
   - Если задача имеет подзадачи, для каждой подзадачи рекурсивно вызывается функция удаления задачи.
   - Удаленная задача и её подзадачи удаляются из списка задач.

4. **Выполнение задачи:**
   - Пользователь выбирает задачу, которую хочет отметить как выполненную.
   - Если задача имеет подзадачи, для каждой подзадачи рекурсивно вызывается функция выполнения задачи.
   - Отмеченная задача отображается как выполненная в списке задач.

5. **Просмотр списка задач:**
   - Отображается список всех задач.
   - Для каждой задачи отображается название и описание (если оно есть).
   - Если задача имеет подзадачи, для каждой подзадачи рекурсивно вызывается функция отображения списка задач.

### Технологии

Этот проект создан с использованием React.js с применением хуков.

### Запуск проекта

1. Убедитесь, что у вас установлен Node.js.
2. Клонируйте репозиторий: `git clone https://github.com/your-repository.git`
3. Перейдите в каталог проекта: `cd your-project-directory`
4. Установите зависимости: `npm install`
5. Запустите проект: `npm start`

### Дополнительные возможности

- Добавление функциональности для сохранения списка задач в локальном хранилище.
- Добавление функциональности для сортировки и фильтрации задач.
- Добавление аутентификации пользователей для сохранения персональных списков задач.

### Демо

Демонстрацию работы приложения можно посмотреть по ссылке: [ToDo List Demo](https://lunatickus.github.io/todo-manager/)

### Автор

Автор: Ваше Имя (Lunatickus)
