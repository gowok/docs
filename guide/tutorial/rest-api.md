# REST API
First, you have to [make a project](./project-setup),
you can learn in [Peroject Setup](./project-setup) section.

## Make Configuration
1. Create file with name `config.yaml`.
2. Put following lines in that file:
```yaml
web:
    enabled: true
    host: :8080
```
It means you enabled the web server and the host will be `:8080`.

## Make Routes
Put following lines in `main.go` file:
```go
package main

import (
	"net/http"

	"github.com/gowok/gowok"
)

func ConfigureRoute(p *gowok.Project) {
	r := gowok.Web
	r.Get("/users", func(w http.ResponseWriter, r *http.Request) {
	})
	r.Post("/users", func(w http.ResponseWriter, r *http.Request) {
	})
	r.Put("/users/{id}", func(w http.ResponseWriter, r *http.Request) {
	})
	r.Delete("/users/{id}", func(w http.ResponseWriter, r *http.Request) {
	})
}

func main() {
	gowok.Configures(
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

