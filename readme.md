# Бібліотеки, які використовуються:

express routing-controllers reflect-metadata class-transformer class-validator cors

# І для devDependencies:

@types/express @types/node ts-node tsconfig-paths typescript nodemon

ts-node - буду рендерити, щоби не білдити напряму у теку

tsconfig-paths - для вирішення проблем з відносними шляхами

# Ініціалізація TS

tsc --init

# nodemon.json

{ "watch": ["src"], // за якою текою слідкувати

"ext": "ts, tsx", // за якими розширеннями файлів слідкувати "ignore":

["src/**/*.spec.ts"], // які файли тре ігнорувати

"exec": "ts-node -r tsconfig-paths/register src/main.ts" } // як це все виконувати

Не будемо білдіти кожен раз, а будемо використовувати ts-node: "ts-node -r tsconfig-paths/register src/main.ts"
