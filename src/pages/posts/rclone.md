---
heading: 'Rclone tips'
pubDate: 2024-06-25
description: 'Tips on using RClone'
author: 'Viranchee Lotia'
image:
    url: 'https://rclone.org/img/logo_on_light__horizontal_color.svg'
    alt: 'Rclone logo'
tags: ["rclone", "files"]
---
# Tips on using Rclone

Published on: 2024-06-25

## Ideas implemented

### Sharing files: Generating links

``` zsh
rclone copy file server:path/file
rclone link server:path/file | pbcopy
```

### NCDU - Getting usage information of the disk

``` zsh
rclone ncdu server:
```

### Backup Rclone config file

Backing up Rclone's config file to Keepass server

## Ideas to Experiment

### Mounting

``` zsh
rclone mount server: /Volumes/server
```

### RAM file system

Idea, not yet implemented.
Use FS with RAM backend to download & consume youtube videos.
