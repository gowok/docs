# REST API
First, you have to [make a project](./project-setup),
you can learn in [Project Setup](./project-setup) section.

## Make Configuration
1. Create file with name `config.yaml`.
2. Put following lines in that file:
```yaml
web:
    enabled: true
    host: :8080

sql:
  default:
    enabled: true
    driver: sqlite3
    dsn: ":memory:"
```
It means you enabled the web server and the host will be `:8080`.

## Make Routes
Put following lines in `main.go` file:
```go
package main

import (
	"net/http"

	"github.com/gowok/gowok"
	_ "github.com/mattn/go-sqlite3"
)

type User struct {
	ID       string
	Email    string
	Password string
}

func ConfigureDB() {
	db := gowok.SQL.Conn().OrPanic()

	_, err := db.Exec(`CREATE TABLE IF NOT EXISTS users (
			id TEXT PRIMARY KEY,
			email TEXT NOT NULL,
			password TEXT NOT NULL
		)`)
	if err != nil {
		panic(err)
	}
}

func ConfigureRoute() {
	r := gowok.Web
	db := gowok.SQL.Conn().OrPanic()

	r.Get("/users", func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.QueryContext(r.Context(), "SELECT * FROM users")
		if err != nil {
			response.New(w).InternalServerError(err)
			return
		}
		defer rows.Close()

		users := make([]User, 0)
		for rows.Next() {
			user := User{}
			err := rows.Scan(&user.ID, &user.Email, &user.Password)
			if err != nil {
				continue
			}
			users = append(users, user)
		}

		response.New(w).Ok(users)
	})

	r.Post("/users", func(w http.ResponseWriter, r *http.Request) {
		input := User{}
		err := request.New(r).JSON(&input)
		if err != nil {
			response.New(w).BadRequest(err)
			return
		}

		_, err = db.ExecContext(r.Context(),
            `INSERT INTO users VALUES(?, ?, ?)`,
			input.ID,
			input.Email,
			input.Password,
		)
		if err != nil {
			response.New(w).InternalServerError(err)
			return
		}

		response.New(w).Created()
	})

	r.Delete("/users/{id}", func(w http.ResponseWriter, r *http.Request) {
		_, err := db.ExecContext(r.Context(),
			`DELETE FROM users WHERE id = ?`,
			r.PathValue("id"),
		)
		if err != nil {
			response.New(w).InternalServerError(err)
			return
		}

		response.New(w).Created()
	})
}

func main() {
	gowok.Configures(
        ConfigureDB,
		ConfigureRoute,
	)
	gowok.Run()
}
```

## Install Dependencies
Run this in your terminal:
```bash
go mod tidy
```

## Run
Run this in your terminal:
```bash
go run main.go --config config.yaml
```

It will shows something like this:
```
{"time":"2025-11-20T10:03:05.14919773+07:00","level":"INFO","msg":"starting web"}
```

## Test
Run this in your terminal:
```bash
curl localhost:8080/users -v
```

It will shows something like this:
```
* Host localhost:8080 was resolved.
* IPv6: ::1
* IPv4: 127.0.0.1
*   Trying [::1]:8080...
* Established connection to localhost (::1 port 8080) from ::1 port 43850
* using HTTP/1.x
> GET /users HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/8.17.0
> Accept: */*
>
* Request completely sent off
< HTTP/1.1 200 OK
< Date: Thu, 20 Nov 2025 03:12:33 GMT
< Content-Length: 0
<
* Connection #0 to host localhost:8080 left intact
```

Your REST API is running well, because it response with 200 OK.

