# Project Setup

## Prerequisites
* [Go](https://go.dev) version 1.22 or higher
* Terminal for accessing Go via its command line interface (CLI).
* Text Editor with Go syntax support. 
    * [VSCode](https://code.visualstudio.com/) is recommended, along with the [official Go extension](https://marketplace.visualstudio.com/items?itemName=golang.Go).

## Project Setup
### Create Folder
1. Open your file manager.
2. Create folder with name that you want (also Go want).
    > Go's project folder name recommendation:
    >
    > https://go.dev/blog/package-names

### Initiate Project
1. Open terminal
2. Change directory to project folder.

    You can use `cd` command to do that.

    For example:
    ```sh
    cd new_gowok_project
    ```

3. Initiate Go project inside it using this command.
    ```sh
    go mod init new_gowok_project
    ```
4. Now, you can open this folder using text editor.

### Create Go File
1. Using your file manager or text editor, create new file with name `main.go`.
2. Put code below inside that file.
```go
package main

func main() {
    // your code here
}
```

### Run

To run Go code, use this command:
```sh
go run main.go
```

You can see any output?

No?

Yeah, that's actually run successful.

Congratulations!!!
