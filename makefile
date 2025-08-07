app-build:
	NODE_ENV=production npm run build

container-build:
	docker build -t ryanep/cv:1.0.3 --progress=plain .

clean:
	rm -rf ./public
