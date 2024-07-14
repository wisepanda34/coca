# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

Які інструменти для «спілкування» між компонентами ви знаєте?
props emit
store
provide inject

Що таке computed?
computed функція, яка генерує нове значення на основі залежностей і автоматично кешує результати, що дозволяє оптимізувати виконання

Що таке watchEffect?
watchEffect є функцією, яка автоматично відслідковує всі реактивні залежності, що використовуються всередині її функції не кешуючи результати, і виконує її при будь-якій зміні цих залежностей. Вона спостерігає за всім, що є всередині функції, без необхідності явно вказувати, що саме потрібно спостерігати.

Чим відрізняється watch від watchEffect?
Різниця в тому, що watch спостерігати за конкретними змінними і запускає виконання побічних ефектіів, а watchEffect автоматично виконує побічні ефекти при змінах реактивних даних.

Що таке slot і які він надає можливості?
це механізм що дозволяє вказувати місьце вставки шаблону в інший компонент

Чим відрізняється ref від reactive?
ref використовуэться для простих типів і повертає об'єкт з властивістю .value
reactive використовується для обектів та масивів 

Що таке provide і inject?
Це функції, що належать до способу передачи данних від батька до дитини незважаючи на ступінь вложеності

Навіщо потрібні стейт менеджери (Vuex, Pinia) та як їх налаштовувати?
Це централізовані стейти, які містять стан, до якого є доступ з будь якого компоненту.

Життєвий цикл компонента
Кожний компонент має вісім фаз існування: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeUnmount, unmounted. Використовуються в залежності від задач і умов, найчастіше використовуються mounted та unmounted






