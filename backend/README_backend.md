# BACKEND

Разработка будет вестись на `windows` без использования `docker`

База данных `PostgreSQL` должна быть установлена в системе

https://www.postgresql.org/

## Nakama

v3.17.0

https://heroiclabs.com/nakama/
https://github.com/heroiclabs/nakama

при копировании nakama, удалил папку `vendor` и следующие файлы
`.github`
`go.sum`

изменил в `go.mod` go 1.21

Компилируем

```
go get
go build

// тестовый запуск
// сменить password на свой пароль к базе

<!-- 
./nakama.exe migrate up --database.address postgres:password@127.0.0.1:5432
./nakama.exe --database.address postgres:password@127.0.0.1:5432 
-->

Переименовать `config-example.yml` в `config.yml` в папке `config`

// сначало запустить (поменять password)

./nakama.exe migrate up --database.address postgres:password@127.0.0.1:5432

./nakama.exe --config ../config/config.yml

```
http://127.0.0.1:7351/

admin:password

