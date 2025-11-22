# GRPC
Interface to do GRPC server activities, most of all are service registering.
This page will cover how to do that.

## Preparations
1. You need to create a function that follow `gowok.ConfigureFunc`.
```go
func ConfigureGRPC() {
    // TODO: register services here
}
```

2. Import GRPC package
```go
import "github.com/gowok/gowok"

func ConfigureGRPC() {
    // TODO: register services here
}
```

3. Register this func into `project.Configures`.
```go
func main() {
    gowok.
        Configures(ConfigureGRPC).
        Run()
}
```

## Register Service
Since server creation and spawning are handled by Gowok, you only need to register GRPC services.

```go
RegisterYourServiceServer(gowok.GRPC.Server, YourService{})
```

Example:
```go
service.RegisterProductServer(gowok.GRPC.Server, service.ProductService{})
```

After all services registered, client can do interaction normally.

