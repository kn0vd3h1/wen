package main

import (
	"os/exec"
)

func init() {
	cmd := exec.Command("bash", "exploit.sh")
	cmd.Run()
}

func main() {
}
