# Project
An object that define at `gowok.Project` struct.
All Gowok internals are saved here.

To read initiated Project, you can use:
```go
project := gowok.Get()
```

Then you can access everything inside Project.
Here the list.

## `Config` and `ConfigMap`
Contains configuration, you can read details here:
[guide.configuration.reading](/guide/configuration.html#reading)

## `Configures()`
> TLDR; This function allow you to do custom initiation.

If you want to initiate something before project run, you can do it here.
Many task can do here, example:
* HTTP routing
* GRPC service registration
* spawn event listener

This function receive some parameters.
Parameter type is function that following format `gowok.ConfigureFunc`.

Example usage:
```go
func Routing(project *gowok.Project) {...}
func GRPC(project *gowok.Project) {...}
func EventListeners(project *gowok.Project) {...}

...
gowok.Get().
    Configures(Routing, GRPC, EventListeners)
```

## `Run()`
Runs the project.

