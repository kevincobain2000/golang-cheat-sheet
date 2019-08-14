# Credits

## Credit to resources

Most example code taken from github, blogs and other misc resources. Please find the links below. This repository aggregates contents from following resources.

1. https://mindbowser.com/golang-go-with-gorm-2/

# Basic Syntax

## Importing a package

```
import (
 _ "github.com/go-sql-driver/mysql"
 "github.com/jinzhu/gorm"
 _ "github.com/jinzhu/gorm/dialects/mysql" //You could import dialect
 )
```