# HTTP
Interface to do web server activities, most of all are routing.
This page will cover how to routing with all possible use cases.

## Preparations
1. You need to create a function that follow `gowok.ConfigureFunc`.
```go
func ConfigureRoute(project *gowok.Project) {
    // TODO: routes goes here
}
```

2. Import router package
```go
import "github.com/gowok/gowok/router"

func ConfigureRoute(project *gowok.Project) {
    // TODO: routes goes here
}
```

3. Register this func into `project.Configures`.
```go
func main() {
    gowok.Get().
        Configures(ConfigureRoute).
        Run()
}
```

## Basic
All route can registered by this way.
```go
router.HandleFunc(method, path, http.HandlerFunc)
```

Example:
```go
router.HandleFunc("GET", "/", func(w http.ResponseWriter, r *http.Request) {
    // TODO: your logics goes here
})
```

## Helpers
For most HTTP request methods (GET, POST, PUT, and so on),
supported by router helpers.
By doing this way, your code will shorter and straight forward.
Most important, this will look like something familiar.

### Get
```go
router.Get(path, http.HandlerFunc)
```

### Post
```go
router.Post(path, http.HandlerFunc)
```

### Put
```go
router.Put(path, http.HandlerFunc)
```

### Patch
```go
router.Patch(path, http.HandlerFunc)
```

### Delete
```go
router.Delete(path, http.HandlerFunc)
```

## Group
If you have any group of route, this feature will useful.
A route group is collection of routes with same prefix.
So, you no need to write same thing any more.

To create a group you can do this.
```go
groupName := router.Group(prefix)
```

Example:
```go
products := router.Group("/products")
products.Get("", func(w http.ResponseWriter, r *http.Request) {})
products.Post("", func(w http.ResponseWriter, r *http.Request) {})
products.Put("", func(w http.ResponseWriter, r *http.Request) {})
products.Patch("", func(w http.ResponseWriter, r *http.Request) {})
products.Delete("", func(w http.ResponseWriter, r *http.Request) {})
```
Now, you have routes of products CRUD.

Easy, right?

Your career brighter right now 😎

## Conclusion
```go
package main

import "github.com/gowok/gowok/router"

func main() {
    gowok.Get().
        Configures(ConfigureRoute).
        Run()
}

func ConfigureRoute(project *gowok.Project) {
    router.HandleFunc("GET", "/", func(w http.ResponseWriter, r *http.Request) {})

    products := router.Group("/products")
    products.Get("", func(w http.ResponseWriter, r *http.Request) {})
    products.Post("", func(w http.ResponseWriter, r *http.Request) {})
    products.Put("", func(w http.ResponseWriter, r *http.Request) {})
    products.Patch("", func(w http.ResponseWriter, r *http.Request) {})
    products.Delete("", func(w http.ResponseWriter, r *http.Request) {})
}
```
