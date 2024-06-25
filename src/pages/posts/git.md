---
heading: 'Git'
pubDate: 2024-06-25
description: 'Git Hacks'
author: 'Viranchee Lotia'
tags: ["git"]
---

# Git hacks that I use

## Commit Fast

A Fish function for Git commit and push:

Usage: `gce The Commit Message`, `gce` i.e. empty commit message

``` zsh
function gce -d "Git commit with optional message and push"
    set message (string join " " $argv)
    git commit -a --allow-empty-message -m "$message"
    git push
end
```

Allows to commit with empty messages too. Only works with tracked files.
To get untracked files, use `git add --all`

Allow Empty commit messages

## Git shorthands

Fish Git shorthands:

Similar to zsh git shorthand plugin. Benefit for fish: supports description tags

``` zsh
fisher install jhillyerd/plugin-git
```
