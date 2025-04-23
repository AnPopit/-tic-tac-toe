module.exports = {
    parser: '@typescript-eslint/parser',  // Используем парсер для TypeScript
    extends: [
        'plugin:react/recommended',  // Рекомендации для React
        'plugin:@typescript-eslint/recommended',  // Рекомендации для TypeScript
    ],
    plugins: ['react', '@typescript-eslint', 'react-hooks'],  // Подключаем плагины для React и хуков
    settings: {
        react: {
            version: 'detect',  // Автоматически определяет версию React
        },
    },
    rules: {
        'react/react-in-jsx-scope': 'off',  // Не требуется в React 17+
        '@typescript-eslint/explicit-module-boundary-types': 'off',  // Отключаем требование к типизации возвращаемых значений
        '@typescript-eslint/no-explicit-any': 'warn',  // Предупреждаем о типе `any`
        'react-hooks/rules-of-hooks': 'error',  // Проверка правил хуков
        'react-hooks/exhaustive-deps': 'warn',  // Предупреждения по зависимостям в хуках
    },
};