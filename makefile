
COLOUR_YELLOW = "\033[1;33m"
COLOUR_RED = "\033[1;31m"
COLOUR_GREEN = "\033[0;32m"
COLOUR_END = "\033[0m"

TASK_STARTED = @echo ${COLOUR_YELLOW} - Task started: $@ ${COLOUR_END}
TASK_DONE = @echo ${COLOUR_GREEN} âœ“ Task succeeded: $@ ${COLOUR_END}
TASK_FAILED = @echo ${COLOUR_RED} âœ˜ Task failed: $@ ${COLOUR_END}

.PHONY=build deloy-infra deploy clean release

build:
	${TASK_STARTED}
	NODE_ENV=production npm run build
	${TASK_DONE}
deploy:
	${TASK_STARTED}
	aws s3 sync ./dist/ s3://cv.ryanep.com --delete --acl public-read && \
	aws cloudfront create-invalidation --distribution-id E1WLLUZ9KKFMY0 --paths "/*"
	${TASK_DONE}
clean:
	${TASK_STARTED}
	rm -rf ./public
	${TASK_DONE}
release: clean build deploy
