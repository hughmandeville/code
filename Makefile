
.PHONY: help
## help: show this help message
help:
	@echo "Usage: make [target]\n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':' |  sed -e 's/^/ /'
	@echo

.PHONY: build
## build: build app distrubtion
build:
	npm run build

.PHONY: run
## run: start app
run:
	npm start

.PHONY: update
## update: update packages
update:
	npm install
