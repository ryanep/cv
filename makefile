app-build:
	NODE_ENV=production npm run build

container-build:
	docker build -t ryanep/cv:1.0.1 --progress=plain .

clean:
	rm -rf ./public

release: clean build deploy
